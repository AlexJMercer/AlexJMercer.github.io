<template>
  <main>
    <MobileSidebar />
    <div class="container-fluid my-4">
      <div class="grid-cards">
        <div class="grid-cards-content">
          <div class="card card-plain">
            <img
              src="https://i.imgur.com/pmAoJ8g.jpg"
              class="card-img-top card-img-fit test-mask-image"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card card-plain">
            <img
              src="https://i.imgur.com/Jm2T2pP.jpg"
              class="card-img-top card-img-fit"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card card-plain">
            <img
              src="https://i.imgur.com/dldlvc0.jpg"
              class="card-img-top card-img-fit"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card card-plain">
            <img
              src="https://i.imgur.com/q4PEpci.jpg"
              class="card-img-top card-img-fit"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container bg-light p-5">
      <div class="d-flex">
        <template v-for="parent in parents">
          <span
            :key="parent.id"
            class="badge badge-tag"
            :class="[
              activeParents.includes(parent.id) ? 'bg-orange' : 'bg-dark',
            ]"
            @click.prevent="toggleParent(parent)"
          >
            {{ parent.title }}
          </span>
        </template>
      </div>
      <div class="d-flex">
        <template v-for="tag in tags">
          <span
            :key="tag.id"
            class="badge"
            :class="[
              activeTags.includes(tag)
                ? 'bg-neon-yellow text-dark'
                : 'bg-secondary text-dark',
            ]"
            :title="tag.title"
            @click.prevent="toggleChildren(tag)"
          >
            {{ tag.title }}
          </span>
        </template>
      </div>
      <div class="test-mask-image p-5"></div>
      <div class="text-dark mt-5">
        <h2 class="">Active Parents</h2>
        <pre>{{ activeParents }}</pre>
      </div>
      <div class="text-dark mt-5">
        <h2 class="">Tags</h2>
        <pre>{{ tags }}</pre>
      </div>
      <div class="text-dark mt-5">
        <h2 class="">ActiveTags</h2>
        <pre>{{ activeTags }}</pre>
      </div>
    </div>
    <div class="first">
      <div class="second">
        <div class="third">
          <FlexSidebar />
          <!-- <div class="element-left">
            <nav>
              <div class="element-left-content">
                <div class="element-left-brand">
                  <img
                    :src="logo"
                    title="Ultimate Mercer"
                    width="60"
                    class="mx-auto d-block"
                  />
                </div>
                <div class="element-left-block">
                  <div class="element-left-links">
                    <img
                      :src="logo"
                      title="Ultimate Mercer"
                      width="40"
                      class="filter-cyberpunk-v mx-auto d-block"
                    />
                  </div>
                  <div class="element-left-links">
                    <img
                      :src="logo"
                      title="Ultimate Mercer"
                      width="40"
                      class="filter-cyberpunk-v mx-auto d-block"
                    />
                  </div>
                  <div class="element-left-links">
                    <img
                      :src="logo"
                      title="Ultimate Mercer"
                      width="40"
                      class="filter-cyberpunk-v mx-auto d-block"
                    />
                  </div>
                </div>
                <div class="element-left-block">
                  <div class="element-left-links">
                    <img
                      :src="logo"
                      title="Ultimate Mercer"
                      width="40"
                      class="filter-cyberpunk-purple-red-orange mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div> -->

          <footer class="element-footer">
            <div
              class="element-footer-content"
              :class="isDarkTheme ? 'bg-dark' : 'bg-light'"
            >
              <div class="element-footer-container">
                <div class="element-footer-items">
                  <img
                    :src="logo"
                    title="Ultimate Mercer"
                    width="45"
                    class="mx-auto d-block"
                  />
                </div>
                <div class="element-footer-items">
                  <button
                    class="btn rounded-circle"
                    :class="
                      isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'
                    "
                    style="width: 40px; height: 40px; padding: 8px"
                  >
                    <font-awesome-icon :icon="['fas', 'bars']" />
                  </button>
                </div>
                <div class="element-footer-items">
                  <a
                    href="#"
                    class="btn rounded-circle"
                    :class="
                      isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'
                    "
                    style="width: 40px; height: 40px; padding: 8px"
                    @click.prevent="darkTheme"
                  >
                    <font-awesome-icon :icon="['fas', 'adjust']" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>

    <div class="">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.3351 26.2521C27.6208 26.542 27.6208 27.007 27.3351 27.2969C27.0405 27.5895 26.5641 27.5884 26.2709 27.2944C25.9777 27.0003 25.9788 26.5247 26.2734 26.2321C26.4162 26.093 26.6089 26.0169 26.8084 26.0206C27.0079 26.0244 27.1976 26.1077 27.3351 26.2521ZM4.68985 4.67586C4.39668 4.96989 4.3978 5.44549 4.69235 5.73814C4.98691 6.0308 5.46336 6.02968 5.75653 5.73565C6.03232 5.4402 6.02418 4.97979 5.73812 4.69424C5.45206 4.40868 4.99083 4.40056 4.69486 4.67586H4.68985ZM16.0282 4.00195H16.0031C15.5883 4.00195 15.252 4.33767 15.252 4.7518C15.252 5.16593 15.5883 5.50165 16.0031 5.50165C16.418 5.50165 16.7543 5.16593 16.7543 4.7518C16.7543 4.33767 16.418 4.00195 16.0031 4.00195H16.0282ZM16.0275 26.4971C15.6127 26.4971 15.2764 26.8328 15.2764 27.2469C15.2764 27.661 15.6127 27.9968 16.0275 27.9968H16.0526C16.4675 27.9968 16.8038 27.661 16.8038 27.2469C16.8038 26.8328 16.4675 26.4971 16.0526 26.4971H16.0275ZM4.67556 26.2525C4.4299 26.4992 4.38636 26.882 4.5704 27.1773C4.62926 27.2761 4.71188 27.3585 4.81078 27.4173C5.14428 27.625 5.58178 27.5409 5.81419 27.2245C6.0466 26.908 5.99532 26.4662 5.69657 26.2112C5.39782 25.9562 4.95264 25.9742 4.67556 26.2525ZM26.2739 4.69094C26.0274 4.94368 25.986 5.33191 26.1737 5.63075C26.2279 5.71804 26.3016 5.79162 26.389 5.84571C26.6888 6.03123 27.0765 5.99006 27.3305 5.74573C27.5315 5.5588 27.6142 5.27727 27.5462 5.01159C27.4783 4.74591 27.2704 4.53845 27.0043 4.4706C26.7381 4.40275 26.4561 4.48533 26.2688 4.68595L26.2739 4.69094ZM6.59207 11.3607C8.00115 8.55645 10.5774 6.51521 13.6331 5.78184C13.7129 5.76431 13.7818 5.71461 13.8236 5.64453C13.8653 5.57444 13.8762 5.49024 13.8535 5.41191C13.7753 5.15624 13.7415 4.88912 13.7533 4.62207C13.7605 4.5286 13.7227 4.4373 13.6515 4.37613C13.5804 4.31497 13.4843 4.29121 13.3928 4.31213C12.9821 4.40711 12.5765 4.5021 12.1758 4.63707C7.07283 6.35861 3.74046 11.2591 4.02137 16.6288C4.30228 21.9984 8.12786 26.5258 13.3827 27.7074C13.4758 27.7267 13.5726 27.701 13.6436 27.6379C13.7147 27.5749 13.7516 27.482 13.7433 27.3874C13.7248 27.1189 13.757 26.8492 13.8385 26.5926C13.8611 26.5143 13.8503 26.4301 13.8086 26.36C13.7668 26.2899 13.6979 26.2402 13.6181 26.2227C10.5642 25.4855 7.98938 23.4454 6.57704 20.6438C5.15463 17.7123 5.15463 14.2922 6.57704 11.3607H6.59207ZM24.4007 27.8169C19.3622 31.3931 12.6078 31.3931 7.56928 27.8169C7.50307 27.7712 7.42125 27.7539 7.34218 27.769C7.2631 27.784 7.19337 27.8301 7.14862 27.8969C6.96912 28.1241 6.7733 28.3379 6.5627 28.5368C6.50457 28.5932 6.47178 28.6707 6.47178 28.7517C6.47178 28.8327 6.50457 28.9102 6.5627 28.9667C7.87747 29.971 9.36626 30.7251 10.9546 31.1912C15.8145 32.7953 21.1497 31.9854 25.3122 29.0117C25.384 28.9548 25.4259 28.8682 25.4259 28.7767C25.4259 28.6852 25.384 28.5987 25.3122 28.5418C25.1021 28.3606 24.9214 28.1481 24.7763 27.9119C24.6923 27.7913 24.5322 27.7508 24.4007 27.8169ZM26.1593 5.63075C26.2135 5.71804 26.2872 5.79162 26.3747 5.84571L26.2695 5.73573L26.1593 5.63075ZM15.9874 11C13.2216 11 10.9795 13.2381 10.9795 15.999C10.9795 18.7598 13.2216 20.998 15.9874 20.998C18.7531 20.998 20.9952 18.7598 20.9952 15.999C20.9953 13.2459 18.7653 11.011 16.0074 11H15.9874ZM26.5038 15.9996C26.5095 17.6087 26.1445 19.1977 25.4371 20.6436C24.0247 23.4452 21.4499 25.4853 18.396 26.2225C18.3163 26.24 18.2473 26.2897 18.2056 26.3598C18.1638 26.4299 18.153 26.5141 18.1757 26.5924C18.2546 26.8496 18.2869 27.1187 18.2708 27.3872C18.2625 27.4818 18.2995 27.5747 18.3705 27.6377C18.4416 27.7008 18.5383 27.7265 18.6314 27.7072C22.1045 26.9308 25.0543 24.6576 26.6861 21.5002C28.3179 18.3428 28.4639 14.6258 27.0847 11.3505C25.7353 8.206 23.1266 5.77058 19.8934 4.63686C19.4952 4.50809 19.0907 4.39964 18.6815 4.31193C18.5895 4.29139 18.4932 4.31511 18.4214 4.37602C18.3495 4.43692 18.3105 4.52794 18.3159 4.62186C18.332 4.88871 18.2997 5.15627 18.2207 5.4117C18.1981 5.49003 18.2089 5.57424 18.2506 5.64432C18.2924 5.7144 18.3613 5.7641 18.4411 5.78163C21.4968 6.515 24.0731 8.55624 25.4822 11.3605C26.1802 12.807 26.5365 14.394 26.5238 15.9996H26.5038ZM27.9063 24.8127C28.143 24.9575 28.3558 25.1379 28.5373 25.3476C28.597 25.4163 28.6852 25.4536 28.7763 25.4487C28.8673 25.4439 28.951 25.3973 29.003 25.3226C31.9838 21.1683 32.797 15.8426 31.1915 10.9905C30.7245 9.40497 29.9691 7.91882 28.9629 6.60638C28.9064 6.54836 28.8287 6.51562 28.7476 6.51562C28.6665 6.51562 28.5888 6.54836 28.5323 6.60638C28.3331 6.81661 28.1189 7.01208 27.8913 7.19126C27.8243 7.23593 27.7782 7.30553 27.7631 7.38447C27.7481 7.46341 27.7654 7.54508 27.8111 7.61118C31.3937 12.6408 31.3937 19.3831 27.8111 24.4128C27.7293 24.5498 27.7714 24.727 27.9063 24.8127ZM4.0939 7.1812C3.85609 7.03798 3.64301 6.85735 3.4629 6.6463C3.40314 6.57758 3.31495 6.54025 3.22392 6.54513C3.13288 6.55002 3.04921 6.59658 2.99717 6.6713C0.0164115 10.8255 -0.796808 16.1513 0.808732 21.0034C1.2757 22.5889 2.03112 24.0751 3.03724 25.3875C3.0938 25.4455 3.17146 25.4783 3.25257 25.4783C3.33368 25.4783 3.41135 25.4455 3.46791 25.3875C3.66586 25.1776 3.88021 24.9837 4.10892 24.8076C4.17617 24.762 4.22243 24.6915 4.23747 24.6118C4.25251 24.532 4.23508 24.4496 4.18905 24.3827C0.606448 19.3531 0.606448 12.6107 4.18905 7.58111C4.27093 7.44406 4.22877 7.26686 4.0939 7.1812ZM7.5988 4.18161C12.6374 0.605372 19.3917 0.605372 24.4303 4.18161C24.4965 4.22731 24.5783 4.24458 24.6574 4.22955C24.7364 4.21451 24.8062 4.16843 24.8509 4.10163C25.0304 3.87443 25.2262 3.66058 25.4368 3.46176C25.495 3.40529 25.5278 3.32777 25.5278 3.2468C25.5278 3.16584 25.495 3.08831 25.4368 3.03185C24.1221 2.02752 22.6333 1.27343 21.0449 0.807297C16.1842 -0.795394 10.849 0.0163824 6.68737 2.99185C6.61251 3.0438 6.56587 3.12732 6.56097 3.21819C6.55608 3.30907 6.59348 3.3971 6.66233 3.45676C6.87375 3.63655 7.0547 3.84924 7.19817 4.08663C7.28394 4.22187 7.46327 4.26215 7.5988 4.17661V4.18161Z"
          fill="url(#paint0_linear_1875_12593)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1875_12593"
            x1="0.0282677"
            y1="0.0124585"
            x2="0.0282677"
            y2="31.9808"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4CD3B" />
            <stop offset="0.54" stop-color="#F16622" />
            <stop offset="1" stop-color="#E84856" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="">
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.4631 0.494724C20.8492 -0.165559 21.8035 -0.165559 22.1896 0.494724L27.9105 10.2781C28.3003 10.9447 27.8195 11.7829 27.0473 11.7829H15.6055C14.8332 11.7829 14.3524 10.9447 14.7422 10.2781L20.4631 0.494724ZM20.8888 1.93079C21.0794 1.58848 21.5718 1.58848 21.7624 1.93079L26.2432 9.97643C26.4288 10.3097 26.1878 10.7197 25.8063 10.7197H16.8449C16.4634 10.7197 16.2225 10.3097 16.4081 9.97643L20.8888 1.93079ZM1 4.33782C0.447715 4.33782 0 4.78553 0 5.33782V13.9748C0 14.5271 0.447715 14.9748 1 14.9748H9.66296C10.2152 14.9748 10.663 14.5271 10.663 13.9748V5.33782C10.663 4.78553 10.2152 4.33782 9.66296 4.33782H1ZM1.5663 5.40152C1.29015 5.40152 1.0663 5.62538 1.0663 5.90152V13.4111C1.0663 13.6873 1.29015 13.9111 1.5663 13.9111H9.09666C9.37281 13.9111 9.59666 13.6873 9.59666 13.4111V5.90152C9.59666 5.62537 9.37281 5.40152 9.09666 5.40152H1.5663ZM23.7866 21.5202C23.7866 17.9051 20.8488 14.9744 17.2248 14.9744C13.6008 14.9744 10.663 17.9051 10.663 21.5202C10.663 25.1354 13.6008 28.0661 17.2248 28.0661C20.8488 28.0661 23.7866 25.1354 23.7866 21.5202ZM11.7293 21.5202C11.7293 18.4925 14.1897 16.0381 17.2248 16.0381C20.2599 16.0381 22.7203 18.4925 22.7203 21.5202C22.7203 24.5479 20.2599 27.0024 17.2248 27.0024C14.1897 27.0024 11.7293 24.5479 11.7293 21.5202Z"
          fill="#F1F1F1"
        />
      </svg>
    </div>
  </main>
</template>
<script>
import Logo from '@/assets/images/ultimate-logo-red.svg'
import MobileSidebar from '~/components/MobileSidebar.vue'
export default {
  components: { MobileSidebar },
  data() {
    return {
      logo: Logo,
      parents: [
        {
          id: 1,
          title: 'Ultimates',
        },
        {
          id: 2,
          title: 'Prototype',
        },
        {
          id: 3,
          title: 'Super Saiyans',
        },
      ],
      templateChildrens: [
        {
          id: 1,
          title: 'Mercer',
          parentId: 1,
        },
        {
          id: 2,
          title: 'Alex J. Mercer',
          parentId: 2,
        },
        {
          id: 3,
          title: 'Goku',
          parentId: 3,
        },
        {
          id: 4,
          title: 'Vegeta',
          parentId: 3,
        },
        {
          id: 5,
          title: 'Dana Mercer',
          parentId: 2,
        },
        {
          id: 6,
          title: 'Watson',
          parentId: 1,
        },
      ],
      childrens: [],
      tags: [],
      activeParents: [],
      activeTags: [],
    }
  },
  methods: {
    toggleParent(parent) {
      const isActive = this.activeParents.includes(parent.id) // true or false
      // const children = this.tags.filter(id => id === parent.id)
      if (isActive) {
        // this.activeParents.filter(id=> id !== parent.id)
        const index = this.activeParents.indexOf(parent.id)
        if (index > -1) {
          this.activeParents.splice(index, 1)
        }
        console.log(this.activeParents)
        return
      }
      this.activeParents.push(parent)
      this.checkChildrenByParents(parent)
      console.log(this.activeParents)
    },
    toggleChildren(children) {
      const isActive = this.activeTags.includes(children)
      // eslint-disable-next-line no-debugger
      debugger
      if (isActive) {
        this.activeTags.find((id) => id !== children.id)
        const index = this.activeTags.indexOf(children)
        if (index > -1) {
          this.activeTags.splice(index, 1)
        }
        return
      }
      this.activeTags.push(children)
      // eslint-disable-next-line no-debugger
      debugger
    },
    checkChildrenByParents(parent) {
      const isActive = this.activeTags.includes(parent.id)
      // eslint-disable-next-line no-debugger
      debugger
      if (isActive) {
        this.activeTags.find((obj) => obj.parentId !== parent.id)
        const index = this.activeTags.indexOf()
        if (index > -1) {
          this.activeTags.splice(index, 1)
        }
        return
      }
      console.log(parent)
      const mappedTags = this.templateChildrens
        .filter((obj) => obj.parentId === parent.id)
        .map((obj) => ({
          ...obj,
        }))
      debugger
      console.log(JSON.stringify(this.tags, undefined, 2))
      console.log(JSON.stringify(mappedTags, undefined, 2))
      const order = []
      order.unshift(mappedTags)
      console.log('Order', JSON.stringify(order, undefined, 2))
      debugger
      for (let i = mappedTags.length - 1; i >= 0; i--) {
        const element = mappedTags[i]
        this.toggleChildren(element)
        const filter = this.tags.find((obj) => obj.id === element.id)
        const isTrue = filter
        if (!isTrue) {
          this.tags.unshift(element)
        }
      }
      this.filterDuplicates()
    },
    filterDuplicates() {
      this.activeParents = Array.from(
        new Set(this.activeParents.map((obj) => obj.id))
      ).map((id) => {
        return this.activeParents.find((e) => e.id === id)
      })
      this.activeTags = Array.from(
        new Set(this.activeTags.map((obj) => obj.id))
      ).map((id) => {
        return this.activeTags.find((e) => e.id === id)
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
*,
::before,
::after {
  box-sizing: inherit;
}

body {
  text-rendering: optimizeLegibility;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

.first {
  display: block;
  background-color: #ebebeb;
}

.second {
  max-width: 1600px;
  margin: auto;
}

.third {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.element-left {
  background-color: transparent;
  width: 80px;
  min-height: 80vh;
  flex-shrink: 1;
  border: 2px solid #121212;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  nav {
    height: 100%;
  }

  &-block {
    display: block;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    top: 0;
    position: sticky;
    z-index: 10;
    height: 100%;
  }

  &-brand {
    padding: 2rem 0;
    text-align: center;
  }

  &-links {
    padding-bottom: 2rem;
  }
}

.element-footer {
  display: none;
}

@media screen and (max-width: 768px) {
  .element-footer {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 500;

    &-block {
      display: block;
    }

    &-content {
      height: 60px;
      position: relative;
      /* background-color: #fff6dd; */
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
      z-index: 600;
    }
    &-container {
      height: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-items {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 0%;
    }
  }
}

.test-mask-image {
  height: 500px;
  background: linear-gradient(to bottom, #f4cd3b, #f16622, #e84856) !important;
}
</style>
