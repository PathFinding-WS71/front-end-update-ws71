<template>
    <div class="titleSuscriptions">Suscripciones</div>
  <div class="coninterSuscription">
    <pv-card class="cardSuscription">
      <template #title>
        <div class="cardTitleSuscription">UpDate</div>
      </template>
      <template #content>
        <ul>
            <li>Crea tu propio perfil personalizado con tus hobbies e intereses.</li>
            <li>Conoce a más gente con gustos y pasatiempos similares</li>
            <li>Crea un grupo de amigos para chatear o para compartir tus hubbies.</li>
            <li>Publica sobre tus actividades favoritas</li>
            <li>Crea o unete a cualquier evento o actividad que quieras</li>
        </ul>
        <div class="precio">Precio:</div>
        <div class="cost">Gratis*</div>
        <div class="addincluyed">*Incluye anuncios</div>
        <pv-button type="submit" class="botonSuscription" label="Seleccionar Plan"></pv-button>
      </template>
    </pv-card>
    <pv-card class="cardSuscription">
      <template #title>
        <div class="cardTitleSuscription">UpDate+</div></template
      >
      <template #content>
        <ul>
            <li>Todas las características del plan Update</li>
            <li>Acceso exclusivo a eventos seleccionados</li>
            <li>Publica tus eventos como "Eventos destacados"</li>
            <li>Acceso a estadísticas o análisis para poder mejorar tus actividades futuras</li>
            <li>Creación de grupos privados</li>
            <li>0 publicidad.</li>
        </ul>
        <div class="precio">Precio:</div>
        <div class="cost">S/. 15</div>
        <div class="permonth">al mes</div>
        <pv-button type="submit" class="botonSuscription" label="Seleccionar Plan"></pv-button>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "suscription.component",
};
</script>

<style scoped>
.coninterSuscription {
  width: 100%;
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 1fr;
}
.cardTitleSuscription {
  text-align: center;
}
.botonSuscription{
    width: 170px;
    margin-left: calc(50% - 85px);
}
.cardSuscription{
    max-width: 500px;
    min-width: 300px;
    place-self: center;
}
.precio{
    font-weight: bold;
    font-size: 1.2rem;
    padding-left: 20px;
}
.cost{
    font-weight: bold;
    font-size: 2rem;
  text-align: center;
}
.permonth{
    font-weight: bold;
    font-size: 1.2rem;
  text-align: center;
  padding-bottom: 10px;
}
.addincluyed{
    font-size: 0.8rem;
  text-align: center;
  padding-bottom: 10px;

}
.titleSuscriptions{
    font-weight: bold;
    font-size: 2rem;
  text-align: center;
  padding-top: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
