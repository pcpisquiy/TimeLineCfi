let Descripcion_Modal = document.getElementById("Descripcion_Modal");
let btn_Sentido_Vida = document.getElementById("btn_Sentido_Vida");
let btn_Yo =document.getElementById("btn_Yo");
let btn_LaFamilia = document.getElementById("btn_LaFamilia");
let btn_Libertad = document.getElementById("btn_Libertad");
let btn_Muerte = document.getElementById("btn_Muerte");
let imgModal = document.getElementById("imgModal");
const CambiarTexto = (Texto)=>{
    Descripcion_Modal.innerText =Texto;
};
btn_Sentido_Vida.addEventListener('click',()=>{
    CambiarTexto("El ser humano siempre busca la manera de poder darle un sentido a su vida y este lo podemos denominar como siempre estar trazando metas y plantearnos siempre nuevos objetivos ya que en algunos casos el sentido de la vida es siempre andar en constante superación.");
    imgModal.src="./Assets/images/SVIda.jpg";
});
btn_Yo.addEventListener('click',()=>{
    CambiarTexto("La comprensión del yo es algo muy complicado ya que esto depende de el punto de vista de cada persona ya que para algunos el yo significa una persona que a su vez se divide en varios como el yo intelectual, el yo espiritual aunque también para algunas personas el significado del yo es todo lo que me define como persona asi como mis gustos, mis logros etc.");
    imgModal.src="./Assets/images/Yo.png";
});
btn_LaFamilia.addEventListener('click',()=>{
    CambiarTexto("La familia es un concepto y pilar fundamental de la sociedad ya que es la primera escuela de donde las personas se educan y es donde logran obtener la mayor cantidad de conocimientos y comportamientos en la sociedad. Es una lastima que el concepto de la familia se ah estado deformando es este ultimo tiempo ya que el concepto de familia lo podemos ver a partir de la palabra matrimonio que viene de la palabra maternidad y desde aca podemos ver que la familia se hizo para poder procrear hijo y poder formarlo para que sea alguien de bien para la sociedad.");
    imgModal.src="./Assets/images/Familia.jpg";
});
btn_Libertad.addEventListener('click',()=>{
    CambiarTexto("El concepto de la libertad es un tema tabú ya que no todas las personas tiene claro el concepto de que es la libertad porque para algunos la libertad es realizar actos sin que tengan consecuencia o poder realizar actos sobre una delimitación que es la ley. Para mi al final me queda que las personas siempre confunden la libertad con el libertinaje y pues la realidad es que no es eso ya que siempre al tener la libertad de tomar decisiones o realizar acciones siempre va a tener una consecuencia.");
    imgModal.src="./Assets/images/Libertad.png";
});
btn_Muerte.addEventListener('click',()=>{
    CambiarTexto("La muerte es un tema muy complicado que nadie conoce y que nadie sabe que se encuentra después de este mundo solo nos toca como humanos poder ser fuertes cuando nos toque perder a alguien cercano ya que es una etapa muy fuerte ya que entran temas como la melancolía y esto lo agrego por que es una situación muy difícil por que en cierto momento la mente no logra procesar lo que sucede.");
    imgModal.src="./Assets/images/Muerte.jpg";
});
