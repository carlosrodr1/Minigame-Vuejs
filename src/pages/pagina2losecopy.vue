<template>
    <main>
        <h1>Você perdeu! 😟</h1>
        <p>O homem lhe alcançou enquanto você tentava pegar o bilhete e lhe acertou
uma marretada. Você morreu.
</p>

        <a href="/"> Voltar para o início</a>

    </main>

</template>

<script>
export default {
    name:'pagina2losecopy'
        
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