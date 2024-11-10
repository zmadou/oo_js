function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function() {
        console.log(this.nome + " diz Oi!")
    }
}



function Aluno(nome, curso, ano) {
    this.curso = curso
    let _ano = ano


    this.getAnoCursando = function() {
        return _ano
    }


    this.setAnoCursado = function(anoCursado) {

        if (typeof anoCursado === 'number') {
            _ano = anoCursado
        }
        
    }

    this.passouDeAno = function() {
        const novaEtapa = _ano + 1
    }
    Pessoa.call(this, nome)
}

function PreFormando(nome) {
    Aluno.call(this, nome, "Administração", 1)
    this.passouDeAno = function () {
        const segundoAno = this.getAnoCursando() + 1
        this.setAnoCursado(segundoAno)

    }


}


function Formando(nome) {
    Aluno.call(this, nome, "Informatica", 1) 

    this.passouDeAno = function() {
        const terceiroAno = this.getAnoCursando() + 2;
        this.setAnoCursado(terceiroAno)
    }
}


const aluno1 = new Aluno("Eduardo", "Multimidia", 1)
const aluno2 = new PreFormando("Larissa")
const aluno3 = new Formando("Arthur")








aluno1.passouDeAno()
console.log(`${aluno1.nome} Inicou o ${aluno1.getAnoCursando()}º Ano do Ensino Médio Integrado ao Técnico de ${aluno1.curso}`)
aluno2.passouDeAno()
console.log(`${aluno2.nome} Inicou o ${aluno2.getAnoCursando()}º Ano do Ensino Médio Integrado ao Técnico de ${aluno2.curso}`)
aluno3.passouDeAno()
console.log(`${aluno3.nome} Inicou o ${aluno3.getAnoCursando()}º Ano do Ensino Médio Integrado ao Técnico de ${aluno3.curso}`)