<template>
    <main>
        <h1>Você conseguiu 😃</h1>
        <p>Você sobe na árvore e escapa por pouco da manada.</p>

        <a href="/pagina2"> Continuar</a>


    </main>

</template>

<script>
export default {
    name:'pagina1win'
        
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