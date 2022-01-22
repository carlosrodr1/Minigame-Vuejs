<template>
    <main>
        <h1>Você perdeu! 😟</h1>
        <p>Você consegue fugir do local e voltar à cidade, porém sem nenhuma ideia
de quem o atacou. Você continua tentando juntar as peças do
quebra-cabeças. 2 semanas depois você morre atropelado, “acidentalmente”,
ao sair de casa.</p>

        <a href="/"> Voltar para o início</a>

    </main>

</template>

<script>
export default {
    name:'pagina2lose'
        
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