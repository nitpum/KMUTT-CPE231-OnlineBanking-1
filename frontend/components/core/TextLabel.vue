<template>
  <div
    class="v-input v-text-field v-text-field--placeholder v-input--is-readonly theme--light"
  >
    <div class="v-input__control">
      <div class="v-input__slot">
        <div class="v-text-field__slot">
          <label
            aria-hidden="true"
            class="v-label v-label--active theme--light"
          >
            {{ label }}
          </label>
          <div class="text">
            <template v-if="text">
              {{ text }}
            </template>
            <template v-else>
              {{ placeholder }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.v-text-field input {
  flex: 1 1 auto;
  line-height: 20px;
  padding: 8px 0 8px;
  max-width: 100%;
  min-width: 0px;
  width: 100%;
  max-height: 32px;
}
.v-input__slot::before {
  border-color: transparent !important;
}
.v-label {
  left: 0px;
  right: auto;
  position: absolute;
}
.text {
  flex: 1 1 auto;
  line-height: 20px;
  padding: 8px 0 8px;
  max-width: 100%;
  min-width: 0px;
  width: 100%;
  max-height: 32px;
  min-height: 32px;
}
</style>
