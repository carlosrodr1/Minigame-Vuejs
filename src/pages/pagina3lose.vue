<template>
    <main>
        <h1>Você perdeu! 😟</h1>
        <p>Você amarra o homem e se dirige ao laboratório. Você entra
silenciosamente e consegue chegar ao salão principal, onde você observa
aproximadamente umas 10 pessoas. Um passo em falso entrega a sua
posição e você é alvejado. Você morreu.
</p>

        <a href="/"> Voltar para o início</a>

    </main>

</template>

<script>
export default {
    name:'pagina3lose'
        
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