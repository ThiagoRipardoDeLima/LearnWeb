let app = new Vue({
	el:'#app',
	data:{
		titulo: "titulo da pagina",
        copyright: 'Todos os direito reservados',
        subtitulo: 'Este e o <strong>subtitulo</strong> da pagina',
        nome: "Thiago Ripardo de Lima",
        carregado: true
	}
});

function bandeiras(pais)
{
    return "<span> Bandeira do(a) "+ pais +"</span>";
}

Vue.component('brasil', {
    template: "<p>Algo!!</p>"
});
Vue.component('pais', {
    props:['nome'],
    template: "<p v-html='nome'></p>"
});

let lista = new Vue({
    el:'#lista',
    data:{
        nomes:[
            {nome:'thiago', idade:'32'},
            {nome:'thiago1', idade:'32'},
            {nome:'thiago2', idade:'32'},
            {nome:'thiago3', idade:'32'},
            {nome:'thiago4', idade:'32'},
        ],
        pais: '',
        argentina: bandeiras('argentina'),
        brasil: bandeiras('brasil'),
        chile: bandeiras('chile'),
        n1: Math.floor(Math.random()*50),
        n2: Math.floor(Math.random()*50),
        n3: 0,
        nome: "thiago"
    },
    methods: {
        mostrar: (nome) => {
            let txt = 'Olá, ' + nome;
            return txt;
        },
        testar: ()=> {
            return 'Teste 1, 2, 3...';
        },
        paises: function() {
            return [
                {bandeira: this.argentina , continente: 'América do Sul'},
                {bandeira: this.brasil, continente: 'América do Sul'},
                {bandeira: this.chile , continente: 'América do Sul'}
            ];
        }

    }
});

lista.pais = 'brasil';
