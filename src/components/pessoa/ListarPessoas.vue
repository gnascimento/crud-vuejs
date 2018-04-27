<template>
<b-form>
  <div class="container">
    <h4>Buscar Pessoas</h4>
    <b-row>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Filtro" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Digite para buscar" />
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">Limpar</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
    </b-row>
    <div class="row">
      <b-table striped hover :filter="filter" :per-page="perPage" :current-page="currentPage" :items="pessoas" :fields="fields" @filtered="onFiltered"></b-table>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
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
      totalRows: 0,
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
      filter: null
    }
  },
  created() {
    this.$http.get('listar_pessoas.php').then(data => {
      data.json().then(json => {
        this.pessoas = json
        this.totalRows = this.pessoas.length
        console.log(this.pessoas)
      })

    }).catch(error => console.error(error))
  },
  methods: {
    filtrar: function (event) {

    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
