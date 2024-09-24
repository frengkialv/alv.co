"use client";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductImage from "@/components/ProductImage";
import ProductContent from "@/components/ProductContent";
import RatingAndDiscountTabWrapper from "@/components/RatingAndDiscountTabWrapper";
import SuggestionProduct from "@/components/SuggestionProduct";
import Error from "next/error";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingComponent from "@/components/LaodingComponent/LaodingComponent";
import { useToast } from "@/components/Provider/ToastProvider/ToastProvider";
import { CardWrapper, Wrapper } from "./style";
import { PARAMSLABEL } from "@/types/common";
import { ProductsType } from "@/types/product";
import { getProductByName } from "@/services/product.services";
import { ColorProduct, SizeProduct, StockType } from "@/types/stock";
import { getStockQuantity } from "@/services/productStock.service";
import { addCart } from "@/services/cart.service";
import { CartContext } from "@/components/Provider/CartProvider";

interface PageProps {
  params: {
    name: string;
    category: string;
  };
}

function DetailPage({ params }: PageProps) {
  // For toast
  const { showToast } = useToast();

  // For handle params and breadcrumbs
  const paramCategory = PARAMSLABEL[params.category];
  let paramName = "";

  if (params.name) {
    paramName = params.name.replaceAll("%2B", " ");
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: paramCategory, href: "/" + params.category },
    { label: paramName, href: "/" + params.name },
  ];

  // For Refetch Cart Data
  const { fetchDataCart } = React.useContext(CartContext);

  const [product, setProduct] = React.useState<ProductsType>();
  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorCode, setErrorCode] = React.useState<number>(404);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [colors, setColors] = React.useState<ColorProduct[]>([]);
  const [sizes, setSizes] = React.useState<SizeProduct[]>([]);

  const [colorSelected, setColorSelected] = React.useState<
    ColorProduct | undefined
  >(undefined);
  const [sizeSelected, setSizeSelected] = React.useState<
    SizeProduct | undefined
  >(undefined);
  const [amountOrder, setAmountOrder] = React.useState<number>(1);

  const [stockLeft, setStockLeft] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (product) {
      colorsGrouping(product.stock);
    }
  }, [product]);

  React.useEffect(() => {
    findProductHandler();
  }, []);

  const colorsGrouping = (stocks: StockType[]) => {
    const nextColors: ColorProduct[] = [];
    const nextSizes: SizeProduct[] = [];

    stocks.forEach((stock) => {
      if (!nextColors.includes(stock.color)) {
        nextColors.push(stock.color);
      }
      if (!nextSizes.includes(stock.size)) {
        nextSizes.push(stock.size);
      }
    });
    setColors(nextColors);
    setSizes(nextSizes);
  };

  const sizeSelectedChangeHandler = async (size: SizeProduct) => {
    try {
      setStockLeft(null);
      const { data } = await getStockQuantity({
        productId: product!.id,
        color: colorSelected!,
        size: size!,
      });

      if (data.stock === 0) {
        window.location.reload();
        return;
      }

      setStockLeft(data.stock);
      setSizeSelected(size);
      setAmountOrder(1);
    } catch (error) {
      console.log("🚀 ~ sizeSelectedChangeHandler ~ error:", error);
    }
  };

  const colorChangeHandler = (color: ColorProduct) => {
    setColorSelected(color);
    setSizeSelected(undefined);
    setStockLeft(null);
    const nextSizes: SizeProduct[] = [];

    product?.stock.forEach((stock) => {
      if (!nextSizes.includes(stock.size) && stock.color === color) {
        nextSizes.push(stock.size);
      }
    });

    setSizes(nextSizes);
  };

  const findProductHandler = async () => {
    const nextParams = params.name.replaceAll("%2B", "%20");
    try {
      const { data } = await getProductByName(nextParams);

      if (!data) {
        setErrorCode(204);
        setErrorMessage("No data found");
        setIsError(true);
        return;
      }

      setProduct(data);
    } catch (error) {
      setErrorMessage("This page could not be found.");
      setErrorCode(404);
      setIsError(true);
    }
  };

  const submitCartHandler = async () => {
    try {
      setIsLoading(true);
      const { data } = await addCart({
        productId: product!.id,
        quantity: amountOrder,
        color: colorSelected!,
        size: sizeSelected!,
      });

      if (data) {
        setTimeout(() => {
          fetchDataCart();
          showToast({
            title: "Success!",
            description: "Successfully add item to cart.",
          });
        }, 2000);
      }
    } catch (error) {
      console.log("🚀 ~ submitCartHandler ~ error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  if (isError) {
    return <Error statusCode={errorCode} title={errorMessage} />;
  }

  return (
    <Wrapper>
      <ScrollToTop />
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <CardWrapper>
        <ProductImage images={product?.productImage!} />
        {product && (
          <ProductContent
            product={product}
            colors={colors}
            colorSelected={colorSelected}
            colorChangeHandler={colorChangeHandler}
            sizes={sizes}
            sizeSelected={sizeSelected}
            setSizeSelected={sizeSelectedChangeHandler}
            stockLeft={stockLeft}
            amountOrder={amountOrder}
            setAmountOrder={setAmountOrder}
            submitHandler={submitCartHandler}
          />
        )}
      </CardWrapper>

      {/* <RatingAndDiscountTabWrapper /> */}

      {/* <SuggestionProduct /> */}

      <LoadingComponent isLoading={isLoading} />
    </Wrapper>
  );
}

export default DetailPage;
