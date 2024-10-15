"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/navigation";
import { QUERIES, WEIGHT } from "@/constants";
import { getProductAndBrandByQuery } from "@/services/product.services";
import { ProductsType } from "@/types/product";
import { BrandType } from "@/types/brand";
import { formatDiscountPrice, formatPrice } from "@/utils";
import Icon from "../Icon";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  type?: string;
  placeholder?: string;
}

function SearchInputDropdown({
  type = "text",
  placeholder,
  ...delegated
}: Props) {
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [leftOffset, setLeftOffset] = React.useState<number>(0);
  const [topOffset, setTopOffset] = React.useState<number>(0);
  const [inputWidth, setInputWidth] = React.useState<number>(0);
  const [showDropdown, setshowDropdown] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<ProductsType[]>([]);
  const [brands, setBrands] = React.useState<BrandType[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const debouncedSearch = useDebounce(search);

  React.useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setLeftOffset(rect.left);

      setInputWidth(inputRef.current.offsetWidth);
    }

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (debouncedSearch.length > 0) {
      fetchProductAndBrand(debouncedSearch);
    } else {
      setProducts([]);
      setBrands([]);
    }
  }, [debouncedSearch]);

  // Event listener untuk update lebar saat window diresize
  const handleResize = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setLeftOffset(rect.left);
      setInputWidth(inputRef.current.offsetWidth);
    }
  };

  const handleScroll = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      // Mengambil jarak input dari bagian atas viewport
      setTopOffset(rect.top);
    }
  };

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
    <Wrapper>
      <SearchWrapper {...delegated} onClick={() => setshowDropdown(true)}>
        <Input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          value={search}
          readOnly
        />
        <SearchIcon id="search" strokeWidth={2} />
      </SearchWrapper>

      {showDropdown && (
        <Dialog.Root open={showDropdown} onOpenChange={setshowDropdown}>
          <Dialog.Portal>
            <Backdrop>
              <Content
                aria-describedby={undefined}
                style={{
                  width: inputWidth + 40 + "px",
                  top: topOffset - 18 + "px",
                  left: leftOffset - 20 + "px",
                }}
              >
                <VisuallyHidden.Root>
                  <Dialog.Title></Dialog.Title>
                  <Dialog.Description />
                </VisuallyHidden.Root>
                <MainContent>
                  <SearchWrapper style={{ paddingBottom: "20px" }}>
                    <Input
                      type={type}
                      placeholder={placeholder}
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                    <SearchIcon id="search" strokeWidth={2} />
                  </SearchWrapper>

                  <DropdownContent>
                    {brands.length > 0 && (
                      <ListWrapper>
                        {brands.map((brand) => {
                          return (
                            <List key={brand.name}>
                              <LinkList
                                onClick={() => {
                                  router.push(`/brand?brand=${brand.name}`);
                                  setshowDropdown(false);
                                }}
                              >
                                <Icon id="search" size={22} />
                                {brand.name}
                              </LinkList>
                            </List>
                          );
                        })}
                      </ListWrapper>
                    )}

                    {products.length > 0 && (
                      <ListWrapper style={{ marginTop: "12px" }}>
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
                            <List key={product.id}>
                              <LinkList
                                style={{
                                  alignItems: "center",
                                }}
                                onClick={() => {
                                  router.push(slug);
                                  setshowDropdown(false);
                                }}
                              >
                                <ImagePrimitive
                                  alt=""
                                  src={`data:image/jpeg;base64,${imgUrl}`}
                                  width={40}
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
                                    <BrandTitle>
                                      {product.brand.name}
                                    </BrandTitle>
                                  </div>
                                </DetailProductWrapper>
                              </LinkList>
                            </List>
                          );
                        })}
                      </ListWrapper>
                    )}
                  </DropdownContent>
                </MainContent>
              </Content>
            </Backdrop>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </Wrapper>
  );
}

const fadeIn = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background-color: var(--color-pearls);
  border: 1px solid transparent;
  padding: 12px 16px 12px 50px;
  border-radius: 25px;
  color: var(--color-gray-600);
  outline-offset: 4px;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 16px;
  color: var(--color-gray-600);
  pointer-events: none;
`;

const Backdrop = styled(Dialog.Overlay)`
  background-color: var(--color-backdrop);
  position: fixed;
  inset: 0;
  animation: ${fadeIn} 0.3s linear;
  overflow-y: auto;
  will-change: transform;
`;

const Content = styled(Dialog.Content)`
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: absolute;
  border-radius: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
  animation-fill-mode: backwards;
  will-change: transform;

  @media ${QUERIES.phoneAndSmaller} {
    width: 80%;
  }
`;

const MainContent = styled.div`
  padding: 18px 20px;
`;

const DropdownContent = styled.div`
  padding: 0 20px 10px 20px;
  max-height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const ListWrapper = styled.ul`
  list-style-type: none;
`;

const List = styled.li`
  padding: 8px 0;
`;

const LinkList = styled.button`
  display: flex;
  gap: 16px;
  font-size: ${15 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-black);
  text-transform: capitalize;
  border: none;
  background-color: transparent;
`;

const Title = styled.h4`
  font-size: ${18 / 16}rem;
`;

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

export default SearchInputDropdown;
