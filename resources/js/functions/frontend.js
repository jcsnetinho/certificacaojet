$(document)
    .ready(function () {

        $("form").submit(function (event) {
            if ($('form').form('is valid')) {                
                dadosContato = {}
                dadosContato["nome"] = $("#nome").val();
                dadosContato["email"] = $("#email").val();
                dadosContato["telefone"] = $("#telefone").val();
                dadosContato["assunto"] = $("#assunto").val();
                dadosContato["mensagem"] = $("#mensagem").val();

                sessionStorage.setItem('dadosContato', JSON.stringify(dadosContato));
            }
        });


        var dadosSalvo = JSON.parse(sessionStorage.getItem("dadosContato"));
        if (dadosSalvo == null) {
            dadosSalvo = "[{}]";
        }


        preencherFormulario(dadosSalvo);

        function preencherFormulario(dados) {

            $("#nome").val(dados.nome);
            $("#email").val(dados.email);
            $("#telefone").val(dados.telefone);
            $("#assunto").val(dados.assunto);
            $("#mensagem").val(dados.mensagem);

            return "";
        }


        $('input').on('change', function () {
            var campo = this.name;
            var valor = this.value;
            $('#lblcampo_' + this.id).text(campo + ': ');
            $('#lblvalor_' + this.id).text(valor);
        });

        $('textarea').on('change', function () {
            var campo = this.name;
            var valor = this.value;
            $('#lblcampo_' + this.id).text(campo + ': ');
            $('#lblvalor_' + this.id).text(valor);
        });


        $('.ui.form')
            .form({
                on: 'blur',
                inline: true,
                fields: {
                    nome: {
                        identifier: 'nome',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Por favor preencha o nome'
                            }
                        ]
                    },

                    email: {
                        identifier: 'email',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Por favor preencha o Email'
                            },
                            {
                                type: 'email',
                                prompt: 'Por favor entrar com um e-mail v??lido'
                            }
                        ]
                    },
                    telefone: {
                        identifier: "telefone",
                        rules: [{
                            type: "regExp",
                            value: /(^|\()?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([0-9]{2})[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|\))*(9?[0-9]{4})([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|\x2D)?([0-9]{4})($|\n)/,
                            prompt: "Telefone inv??lido. (Ex: (16) 3645-9857 ou (16) 98764-5316)"
                        }]
                    },
                    assunto: {
                        identifier: 'assunto',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Por favor preencha o assunto'
                            }
                        ]
                    },

                    mensagem: {
                        identifier: 'mensagem',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Por favor preencher a mensagem'
                            }
                        ]
                    }
                }
            }
            );

    })
    ;