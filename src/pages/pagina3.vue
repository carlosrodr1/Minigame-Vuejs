<template>
    <main>
        <h1>Etapa 3</h1>
        <p>Você finalmente consegue ler o bilhete: “Vamos fazer parecer um acidente. Misture o
conteúdo deste frasco na comida dele. O remédio vai começar a fazer efeito depois
de 30 minutos. Quando ele estiver completamente apagado, leve-o até o pé da
árvore mais alta no início da floresta e direcione a manada de búfalos em sua
direção. Estaremos esperando no laboratório ao norte do acampamento.” O que
você faz?</p>

        <a href="/pagina3win"> Opção A (Foge e liga para a polícia)</a>
        <a href="/pagina3lose"> Opção B (Amarra o homem e vai ao laboratório)</a>
        <a href="/pagina3losecopy"> Opção C (Mata o homem, pega a marreta e vai ao laboratório)</a>


    </main>

</template>

<script>
export default {
    name:'pagina3'
        
    }

</script>

<style scoped>
main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
    font-size: 35px;
}
h1{
    color: #292929;
    font-size: 50px;
    margin-bottom: 22px;
}
a{
    font-size: 22px;
    color: #292929;
    text-decoration: none;
    
}
p{
    width: 75%;
    color: #292929;
}


</style>