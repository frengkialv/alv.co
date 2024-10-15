"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Icon from "../Icon";
import styled from "styled-components";
import UnstyledButton from "../UnstyledButton";
import SearchInput from "../SearchInput";
import { WEIGHT } from "@/constants";
import { HeaderContext } from "../Provider/HeaderProvider";
import { BrandType } from "@/types/brand";
import { ProductsType } from "@/types/product";
import { getProductAndBrandByQuery } from "@/services/product.services";
import { useRouter } from "next/navigation";
import { formatDiscountPrice, formatPrice } from "@/utils";
import Image from "next/image";

interface SearchModal {
  open: boolean | undefined;
  handleShowSearchModal: (val: boolean) => void;
}

function SearchModal() {
  const router = useRouter();
  const { showSearchModal, setShowSearchModal } =
    React.useContext(HeaderContext);

  const [search, setSearch] = React.useState<string>("");
  const [products, setProducts] = React.useState<ProductsType[]>([]);
  const [brands, setBrands] = React.useState<BrandType[]>([]);

  React.useEffect(() => {
    if (search) {
      fetchProductAndBrand(search);
    } else {
      setProducts([]);
      setBrands([]);
    }
  }, [search]);

  const fetchProductAndBrand = async (query: string) => {
    try {
      const { data } = await getProductAndBrandByQuery(query);

      setProducts(data.products);
      setBrands(data.brands);
    } catch (error) {
      console.log("🚀 ~ fetchProductAndBrand ~ error:", error);
    }
  };

  return (
    <Wrapper open={showSearchModal} onOpenChange={setShowSearchModal}>
      <Dialog.Portal>
        <Backdrop />
        <Content aria-describedby={undefined}>
          <VisuallyHidden.Root>
            <Dialog.Title>Search Modal</Dialog.Title>
            <Dialog.Description />
          </VisuallyHidden.Root>

          <SearchInputWrapper>
            <SearchInput
              type="search"
              placeholder="Search..."
              value={search}
              onChange={setSearch}
            />
            <CloseButtonWrapper asChild>
              <BackButton>Batalkan</BackButton>
            </CloseButtonWrapper>
          </SearchInputWrapper>

          <InnerWrapper>
            {search.length > 0 &&
              (products.length > 0 || brands.length > 0) && (
                <DropdownWrapper>
                  {brands.length > 0 &&
                    brands.map((brand) => {
                      return (
                        <ListSuggest
                          key={brand.id}
                          onClick={() => {
                            router.push(`/brand?brand=${brand.name}`);
                            setShowSearchModal(false);
                          }}
                        >
                          <Icon id="search" size={22} />
                          {brand.name}
                        </ListSuggest>
                      );
                    })}

                  {products.length > 0 && (
                    <>
                      <Title>Products</Title>
                      {products.map((product) => {
                        const imgUrl = product.productImage[0].imgSrc;
                        const price = formatPrice(
                          product.discountByPercent
                            ? formatDiscountPrice(
                                product.price,
                                product.discountByPercent
                              )
                            : product.price
                        );
                        const slug = `/detail/${
                          product.categoryProduct.name
                        }/${product.name.replaceAll(" ", "+")}`;

                        return (
                          <ListSuggest
                            key={product.id}
                            style={{
                              alignItems: "center",
                            }}
                            onClick={() => {
                              router.push(slug);
                              setShowSearchModal(false);
                            }}
                          >
                            <ImagePrimitive
                              alt=""
                              src={`data:image/jpeg;base64,${imgUrl}`}
                              width={50}
                              height={40}
                              unoptimized
                            />
                            <DetailProductWrapper>
                              <span
                                style={{
                                  color: "#737373",
                                  textAlign: "start",
                                }}
                              >
                                {product.name}
                              </span>

                              <div style={{ display: "flex", gap: "12px" }}>
                                <PriceWrapper>{price}</PriceWrapper>

                                <Dot />
                                <BrandTitle>{product.brand.name}</BrandTitle>
                              </div>
                            </DetailProductWrapper>
                          </ListSuggest>
                        );
                      })}
                    </>
                  )}
                </DropdownWrapper>
              )}

            {search.length === 0 && (
              <DropdownWrapper>
                <Title>Popular Searches</Title>

                <ListSuggest
                  onClick={() => {
                    router.push("/brand?brand=adidas");
                    setShowSearchModal(false);
                  }}
                >
                  <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
                  Adidas
                </ListSuggest>
                <ListSuggest
                  onClick={() => router.push("/brand?brand=tommy+hilfiger")}
                >
                  <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
                  Tommy Hilfiger
                </ListSuggest>
                <ListSuggest onClick={() => router.push("/brand?brand=vans")}>
                  <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
                  Vans
                </ListSuggest>
                <ListSuggest
                  onClick={() => router.push("/brand?brand=superdry")}
                >
                  <Icon id="clock" strokeWidth={2} color="hsl(0, 0%, 60%)" />
                  Superdry
                </ListSuggest>
              </DropdownWrapper>
            )}
          </InnerWrapper>
        </Content>
      </Dialog.Portal>
    </Wrapper>
  );
}

const Wrapper = styled(Dialog.Root)``;

const Backdrop = styled(Dialog.Overlay)`
  background-color: var(--color-backdrop);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
`;

const InnerWrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const BackButton = styled(UnstyledButton)`
  color: var(--color-black);
  font-size: 14px;
  font-weight: ${WEIGHT.medium};
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const ListSuggest = styled.button`
  display: flex;
  gap: 15px;
  border: none;
  color: var(--color-black);
  background-color: transparent;
  text-transform: capitalize;
`;

const CloseButtonWrapper = styled(Dialog.Close)``;

const ImagePrimitive = styled(Image)`
  aspect-ratio: 0.7 / 1;
  height: auto;
  object-fit: cover;
`;

const DetailProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceWrapper = styled.span`
  font-size: ${14 / 16}rem;

  &::before {
    content: "$ ";
  }
`;

const Dot = styled.span`
  display: inline-block;
  margin-top: 8px;
  background-color: var(--color-black);
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 9999px;
`;

const BrandTitle = styled.span`
  font-size: ${14 / 16}rem;
`;

export default SearchModal;
