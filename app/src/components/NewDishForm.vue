<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Dish } from '@/types'

const emit = defineEmits<{
  (e: 'add-new-dish', restaurant: Dish): void
  (e: 'cancel-new-dish'): void
}>()

const elDishNameInput = ref<HTMLInputElement | null>(null)

const newDish = ref<Dish>({
  id: uuidv4(),
  name: '',
  status: 'Want to Try',
  diet: '',
})

const addDish = () => {
  emit('add-new-dish', newDish.value)
}

const cancelNewRestaurant = () => {
  emit('cancel-new-dish')
}

onMounted(() => {
  elDishNameInput.value?.focus()
})
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input
            v-model="newDish.name"
            type="text"
            class="input is-large"
            placeholder="Mystery Flavored Shrimp"
            required
            ref="elDishNameInput"
          />
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addDish" class="button is-success">Create</button>
          <button @click="cancelNewRestaurant" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
