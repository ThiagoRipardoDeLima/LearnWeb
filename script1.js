function adicionarContato($nome)
{
    this.contatos.push($nome);
}

let app = new Vue({
	el:'#app',
	data:{
		titulo: "titulo da pagina",
        copyright: 'Todos os direito reservados',
        subtitulo: 'Este e o <strong>subtitulo</strong> da pagina',
        nome: "Thiago Ripardo de Lima",
        carregado: true,
        aviso: true,
        url: 'www.google.com.br',
        contatos:[],
        contato:''
	},
    methods:{
        btnClick: function() {
            if(this.contato.length == 0)return;
            //alert(this.contato);
            //adicionarContato(this.contato);
            this.contatos.push(this.contato);
        }
    }
});
