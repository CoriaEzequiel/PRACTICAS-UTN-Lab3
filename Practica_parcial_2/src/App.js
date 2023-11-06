

// Deseamos crear un formulario con dos botones, en donde en el input del formulario se ingresen los días a la semana que desea correr la persona, y los botones posean uno un simbolo de “+”(incremento)  y otro de “-” (decremento). El usuario puede utilizar los botones para modificar el valor mostrado en el input o sencillamente escribirlo en el mismo.

// A saber:
// El valor máximo para el input es 7 y el valor mínimo es 1. En caso que el usuario pase o disminuya de estos valores, se mostrará un elemento p debajo del formulario con el texto “¡La semana solo tiene 7 días! ”
// El componente Button no debe ser solo un elemento button de JSX, sino un custom component creado por nosotros.

// Escribir dos componentes:

// FormRunner:
//  Posee la lógica y principales elementos del formulario.
// Retorna:
// Un input del tipo number.
// Dos componentes Button, uno con el texto “+” para incremento y otro con el texto “-” para el decremento.
// Un elemento p que se renderiza condicionalmente si los valores del input no cumplen los requisitos.

// Button:
// Posee la lógica del onClick.
// Su texto es enviado entre sus etiqueta abierta y cerrada 
// (Ejemplo: <Button> Texto del botón </Button>)

// Generales:
// Los componentes deben ser funcionales.
// No es necesario ningún tipo de estilizado en la respuesta.
// Solo entregar los dos componentes (escribirlos en texto)
import './App.css';
import FormRunner from './components/formRunner/FormRunner';

function App() {
  return (
    <div className="App">
      <FormRunner />
    </div>
  );
}

export default App;
