// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const nome = "Rafael";
let idade = 23;

const Topo = () => {
  return (
    <div className="sticky p-7 flex justify-around items-center bg-slate-800">
      <h1 className="font-bold uppercase text-nowrap text-white">
        Loja de <span className="font-light">roupa</span>
      </h1>
      <div className="max-w-md">
        <input
          type="text"
          id="input"
          className="pl-2 pt-1 pb-1 w-full rounded-md	outline-none bg-slate-700"
          placeholder="Pesquisar"
        />
      </div>
    </div>
  );
};

export default function Home() {
  const returnName = () => {
    return nome;
  };
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$50",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ];
  //RENDER MAIN
  return (
    <>
      <Topo />
      <main className="p-4 grid gap-4 grid-cols-4 justify-center">
        <section>
          <nav>
            <ul className="border p-4 col-span-2">
              <p className="text-lg mb-2">Tipos de Camisas</p>
              <li>
                <input type="checkbox" id="input-one" value="n1" />
                <label for="input-one"> Masculinas</label>
              </li>
              <li>
                <input type="checkbox" id="input-two" value="n1" />
                <label for="input-two"> Femininas</label>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="border p-4 col-span-2">
              <p className="text-lg mb-2">Tamanhos</p>
              <li>
                <input type="checkbox" id="input-one" value="n1" />
                <label for="input-one"> P</label>
              </li>
              <li>
                <input type="checkbox" id="input-two" value="n1" />
                <label for="input-two"> M</label>
              </li>
              <li>
                <input type="checkbox" id="input-two" value="n1" />
                <label for="input-two"> G</label>
              </li>
            </ul>
          </nav>
        </section>

        <section className="border p-3 w-full col-span-3">
          <div className="text-fuchsia-50">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-800">
                Nossas Roupas
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
