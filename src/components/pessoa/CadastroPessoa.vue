<template>
<b-form>
  <div class="container">
    <h4>Cadastro de Pessoa</h4>
    <b-alert v-for="(m, index) in mensagens" show :key="index" :variant="m.variant">
      {{m.mensagem}}
    </b-alert>
    <div class="row">
      <div class="col-md-3">
         <b-form-group
                    label="Nome*:"
                    label-for="nomePessoa">
          <b-form-input id="nomePessoa"
                        type="text"
                        v-model="pessoa.nome"
                        required
                        placeholder="Nome da Pessoa">
        </b-form-input>
      </b-form-group>
      </div>
      <div class="col-md-3">
         <b-form-group
                    label="CPF*:"
                    label-for="cpfPessoa">
          <b-form-input id="cpfPessoa"
                        type="text"
                        v-model="pessoa.cpf"
                        required
                        placeholder="CPF"
                        v-mask="'###.###.###-##'">
        </b-form-input>
      </b-form-group>
      </div>
        <b-col sm="3">
          <label for="dataNascPessoa">Data de Nascimento:</label>
          <b-form-input id="dataNascPessoa" v-model="pessoa.dataNascimento" type="date"></b-form-input>
        </b-col>

        <b-col sm="3">
          <label for="salarioPessoa">Salário:</label>
          <b-form-input id="salarioPessoa" v-model="pessoa.salario" type="number" step="0.01"></b-form-input>
        </b-col>
    </div>
    <div class="row">
      <div class="offset-md-8 col-md-2 text-right">
        <b-btn v-b-modal.modalDependente>Adicionar Dependente</b-btn>
      </div>
      <div class="col-md-2 text-right">
        <b-btn variant="primary" v-on:click="salvar()">Salvar</b-btn>
      </div>
    </div>
    <br/>
    <div class="row">
      <b-table striped hover :per-page="perPage" :current-page="currentPage" :items="pessoa.dependentes" :fields="fields"></b-table>
      <b-pagination :total-rows="pessoa.dependentes.length" :per-page="perPage" v-model="currentPage" />
    </div>
    <br>
  </div>
  <b-modal id="modalDependente" title="Adicionar Dependente" ok-title="Adicionar" cancel-title="Cancelar" v-on:ok="adicionarDependente()">
      <b-row>
        <b-col sm="6">
          <b-form-group
                      label="Nome*:"
                      label-for="nomeDependente">
            <b-form-input id="nomeDependente"
                          type="text"
                          v-model="dependenteAdicional.nome"
                          required
                          placeholder="Nome">
          </b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
                      label="CPF:"
                      label-for="cpfDependente">
              <b-form-input id="cpfDependente"
                            type="text"
                            v-model="dependenteAdicional.cpf"
                            required
                            placeholder="CPF"
                            v-mask="'###.###.###-##'">
              </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

  </b-modal>
</b-form>
</template>
<script>
export default {
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      mensagens: [],
      fields: [
        {
          key: 'nome',
          sortable: true,
          label: 'Nome'
        },
        {
          key: 'cpf',
          sortable: true,
          label: 'CPF'
        }
      ],
      dependenteAdicional: {
        nome: '',
        cpf: ''
      },
      pessoa: {
        nome: '',
        cpf: '',
        dataNascimento: null,
        salario: null,
        dependentes: []
      }
    }
  },
  methods: {
    adicionarDependente: function (event) {
      this.mensagens = []
      if(this.dependenteAdicional.nome == null || this.dependenteAdicional.nome == '') {
        this.mensagens.push({ mensagem: 'Informe o nome do dependente', variant: 'danger' })
        event.preventDefault()
      } else {
        this.pessoa.dependentes.push(this.dependenteAdicional)
      }
    },
    salvar: function() {
       this.$http.post('salvar_pessoa.php', this.pessoa)
       .then(response => {
         let data = response.json()
         console.log(data)
       })
       .catch(error => {
         console.error(error)
       })
    }
  }
}
</script>
