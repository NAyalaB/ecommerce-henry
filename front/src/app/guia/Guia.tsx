import { BotonVerProductos } from "@/Components/BotonVerProductos/BotonVerProductos";

const Guia = () => {
  return (
    <>
      <div
        aria-label="contendor-guia"
        className="rounded-lg  bg-gradient-opacity "
      >
        <h1 className="flex justify-center mt-8 mb-4 text-3xl pt-8 pb-4">
          ¡Compra en un Instante con Nuestra Ayuda!
        </h1>
        <div className="mb-4 w-[95%] flex ml-8 pb-4">
          <p>
            A continuación, te presentamos una guía sencilla y detallada para
            ayudarte a efectuar una compra de manera efectiva. Sigue estos pasos
            y disfruta de una experiencia de compra fácil y segura.
          </p>
        </div>

        <div
          aria-label="Contenedor-Item1"
          className="flex flex-row content-between justify-center items-center mb-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center flex-shrink-0 mr-3">
            1
          </div>
          <div aria-label="Texto1" className="w-[90%] pb-2">
            <h3 className="font-semibold">Accede a la Página</h3>
            <p>
              Al ingresar a nuestra página web, te encontrarás con el inicio
              (Home), donde podrás ver una variedad de productos destacados y
              ofertas especiales.
            </p>
          </div>
        </div>

        <div
          aria-label="Contenedor-Item2"
          className="flex flex-row content-between justify-center items-center mb-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center flex-shrink-0 mr-3">
            2
          </div>
          <div aria-label="Texto2" className="w-[90%]">
            <h3 className="font-semibold mt-4">
              Crear una Cuenta o Iniciar Sesión
            </h3>
            <p>
              Si no tienes cuenta: Dirígete a la esquina superior derecha de la
              página. Haz clic en el botón Crear Cuenta. Rellena el formulario
              con tus datos personales y sigue las instrucciones para completar
              el registro. Si ya tienes cuenta: Dirígete a la esquina superior
              derecha de la página. Haz clic en el botón Iniciar Sesión. Ingresa
              tu correo electrónico y contraseña.
            </p>
          </div>
        </div>

        <div
          aria-label="Contenedor-Item3"
          className="flex flex-row content-between justify-center items-center mb-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center flex-shrink-0 mr-3">
            3
          </div>
          <div aria-label="Texto3" className="w-[90%]">
            <h3 className="font-semibold mt-4">Buscar Productos</h3>
            <h4 className="underline">Usar la Barra de Búsqueda:</h4>
            <p className="mb-2">
              Escribe el nombre del producto que deseas comprar en la barra de
              búsqueda ubicada en la parte superior de la página. Presiona Enter
              o haz clic en el icono de la lupa para buscar.
            </p>
            <h4 className="underline">Filtrar por Categoría o Marca:</h4>
            <p>
              Navega por las opciones de categorías o marcas en el menú
              principal o en los filtros laterales. Selecciona la categoría o
              marca deseada para ver los productos disponibles.
            </p>
          </div>
        </div>

        <div
          aria-label="Contenedor-Item4"
          className="flex flex-row content-between justify-center items-center mb-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center flex-shrink-0 mr-3">
            4
          </div>
          <div aria-label="Texto4" className="w-[90%]">
            <h3 className="font-semibold mt-4">Seleccionar el Producto</h3>
            <p>
              Haz clic en el producto que te interesa para ver más detalles.
              Revisa la información del producto, como descripción, precio, y
              características. Si decides comprarlo, haz clic en el botón
              Agregar al Carrito.
            </p>
          </div>
        </div>

        <div
          aria-label="Contenedor-Item5"
          className="flex flex-row content-between justify-center items-center mb-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center flex-shrink-0 mr-3">
            5
          </div>
          <div aria-label="Texto5" className="w-[90%]">
            <h3 className="font-semibold mt-4">Finalizar Compra</h3>
            <p>
              Una vez que hayas agregado todos los productos que deseas comprar
              a tu carrito, haz clic en el botón Finalizar Compra.
            </p>
            <p>
              Revisa tu pedido en la página de resumen de compra y sigue las
              instrucciones para completar el pago.
            </p>
          </div>
        </div>

        <div
          aria-label="Contenedor-Item6"
          className="flex flex-row content-between justify-center items-center mb-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center flex-shrink-0 mr-3">
            6
          </div>
          <div aria-label="Texto6" className="w-[90%]">
            <h3 className="font-semibold mt-3">Verificar Compras Realizadas</h3>
            <p>
              Después de finalizar la compra, puedes verificar todas tus compras
              realizadas en la sección Mis Ordenes.
            </p>
            <p>
              Dirígete a tu perfil de usuario. Selecciona Mis Ordenes para ver
              el historial de tus compras.
            </p>
          </div>
        </div>

        <div className="w-[95%] flex mt-6 ml-8 mb-6 pb-8">
          <h4 className="text-lg">
            Siguiendo estos sencillos pasos, podrás realizar tus compras de
            manera fácil y rápida. ¡Gracias por elegirnos y disfruta de tu
            experiencia de compra!
          </h4>
        </div>
      </div>
      <BotonVerProductos />
    </>
  );
};

export default Guia;
