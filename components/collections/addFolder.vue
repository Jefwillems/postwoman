<template>
  <modal v-if="show" @close="show = false">
    <div slot="header">
      <ul>
        <li>
          <div class="flex-wrap">
            <h3 class="title">{{ $t("new_folder") }}</h3>
            <div>
              <button class="icon" @click="hideModal">
                <i class="material-icons">close</i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div slot="body">
      <ul>
        <li>
          <input
            type="text"
            v-model="name"
            :placeholder="$t('my_new_folder')"
          />
        </li>
      </ul>
    </div>
    <div slot="footer">
      <div class="flex-wrap">
        <span></span>
        <span>
          <button class="icon" @click="hideModal">
            {{ $t("cancel") }}
          </button>
          <button class="icon primary" @click="addNewFolder">
            {{ $t("save") }}
          </button>
        </span>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    show: Boolean,
    collection: Object,
    collectionIndex: Number
  },
  components: {
    modal: () => import("../../components/modal")
  },
  data() {
    return {
      name: undefined
    };
  },
  methods: {
    addNewFolder() {
      this.$store.commit("postwoman/addNewFolder", {
        folder: { name: this.$data.name },
        collectionIndex: this.$props.collectionIndex
      });
      this.hideModal();
    },
    hideModal() {
      this.$emit("hide-modal");
    }
  }
};
</script>
