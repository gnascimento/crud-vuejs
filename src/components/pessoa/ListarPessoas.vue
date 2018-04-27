<template>
<b-form>
  <div class="container">
    <h4>Buscar Pessoas</h4>
    <div class="row">
      <b-table striped hover :per-page="perPage" :current-page="currentPage" :items="pessoas" :fields="fields"></b-table>
      <b-pagination :total-rows="pessoas.length" :per-page="perPage" v-model="currentPage" />
    </div>
  </div>

</b-form>
</template>
<script>
export default {
  data () {
    return {
      pessoas: [],
      perPage: 10,
      currentPage: 1,
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
      ]
    }
  },
  created() {
    this.$http.get('listar_pessoas.php').then(data => {
      data.json().then(json => {
        this.pessoas = json
        console.log(this.pessoas)
      })

    }).catch(error => console.error(error))
  },
  methods: {
    filtrar: function (event) {

    }
  }
}
</script>
