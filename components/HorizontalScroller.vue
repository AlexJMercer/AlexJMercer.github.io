<template>
  <div
    ref="slider"
    class="scroller-container"
    :class="classNames"
    @mousedown="mousedown"
    @mouseleave="mouseleave"
    @mouseup="mouseup"
    @mousemove="mousemove"
    @touchstart="mousedown"
    @touchend="mouseleave"
    @touchcancel="mouseup"
    @touchmove="mousemove"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    classNames: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isDown: false,
      startX: null,
      scrollLeft: null,
    };
  },
  methods: {
    mousedown(e) {
      const { slider } = this.$refs;
      this.isDown = true;
      const pageX = e.pageX || e.targetTouches[0].pageX;
      this.startX = pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    },
    mouseleave() {
      this.isDown = false;
    },
    mouseup() {
      this.isDown = false;
    },
    mousemove(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const { slider } = this.$refs;
      const pageX = e.pageX || e.targetTouches[0].pageX;
      const x = pageX - slider.offsetLeft;
      const walk = x - this.startX;
      slider.scrollLeft = this.scrollLeft - walk;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroller-container {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  will-change: transform;
  user-select: none;
  cursor: grab;
}
.item {
  display: inline-block;
  background: #480bff;
  height: 350px;
  width: 275px;
  margin: 2em 1em 2em;
}
.scroller-container .item:nth-child(1) {
  margin-left: 0;
}
</style>
