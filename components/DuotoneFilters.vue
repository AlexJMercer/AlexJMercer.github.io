<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="svg-filters">
    <filter id="blue-red" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        result="gray"
        values="1 0 0 0 0
                              1 0 0 0 0
                              1 0 0 0 0
                              0 0 0 1 0"
      ></feColorMatrix>

      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
        <feFuncR type="table" tableValues="0.141176470 0.921568627"></feFuncR>
        <feFuncG type="table" tableValues="0.125490196 0.117647058"></feFuncG>
        <feFuncB type="table" tableValues="0.415686274 0.196078431"></feFuncB>
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>

    <filter id="black-red" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        result="grayscale"
        values="1 0 0 0 0
                                          1 0 0 0 0
                                          1 0 0 0 0
                                          0 0 0 1 0"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 1" />
        <feFuncG type="table" tableValues="0 0" />
        <feFuncB type="table" tableValues="0 0" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
    </filter>

    <filter id="spotify-blue">
      <feColorMatrix
        type="matrix"
        result="gray"
        values="1 0 0 0 0
                              1 0 0 0 0
                              1 0 0 0 0
                              0 0 0 1 0"
      ></feColorMatrix>

      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
        <feFuncR
          type="table"
          tableValues="0.2588235294 0.61960784317"
        ></feFuncR>
        <feFuncG type="table" tableValues="0.1333333333 0.937254902"></feFuncG>
        <feFuncB type="table" tableValues="0.9450980392 0.8823529412"></feFuncB>
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>

    <filter id="pink-blue">
      <feColorMatrix
        type="matrix"
        result="gray"
        values="1 0 0 0 0
                              1 0 0 0 0
                              1 0 0 0 0
                              0 0 0 1 0"
      ></feColorMatrix>

      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
        <feFuncR type="table" tableValues="0.78 0.53" />
        <feFuncG type="table" tableValues="0.09 0.98" />
        <feFuncB type="table" tableValues="0.44 0.99" />
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>

    <filter id="black-white">
      <feColorMatrix
        type="matrix"
        result="gray"
        values="1 0 0 0 0
                              1 0 0 0 0
                              1 0 0 0 0
                              0 0 0 1 0"
      ></feColorMatrix>

      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
        <feFuncR type="table" tableValues="0 1" />
        <feFuncG type="table" tableValues="0 1" />
        <feFuncB type="table" tableValues="0 1" />
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>

    <filter id="purple-pink" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
                        .33 .33 .33 0 0
                        .33 .33 .33 0 0
                        0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 1 1" />
        <feFuncG type="table" tableValues="0.21 0 1" />
        <feFuncB type="table" tableValues="0.91 1 1" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter id="bluish-canary" color-interpolation-filters="sRGB">
      <!--feColorMatrix
          type="matrix"
          result="grayscale"
          values="1 0 0 0 0
                                                                      1 0 0 0 0
                                                                      1 0 0 0 0
                                                                      0 0 0 1 0"
        /-->
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
                                                                .33 .33 .33 0 0
                                                                .33 .33 .33 0 0
                                                                0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.1647058 0.2901960 0.9764705" />
        <feFuncG type="table" tableValues="0 0.9294117 1" />
        <feFuncB type="table" tableValues="0.2901960 0.3529411 0.5882352" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter id="red-sunset" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
                        .33 .33 .33 0 0
                        .33 .33 .33 0 0
                        0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 0.86 0.97" />
        <feFuncG type="table" tableValues="0 0.08 0.81" />
        <feFuncB type="table" tableValues="0 0.24 0.05" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
    </filter>

    <filter
      id="pink-yellow"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 1" />
        <feFuncG type="table" tableValues="0 1" />
        <feFuncB type="table" tableValues="1 0" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <!--Cyberpunk Filters-->
    <filter
      id="cyberpunk-a"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.89 0.28 0.01 0" />
        <feFuncG type="table" tableValues="0.02 0.04 0.66 1" />
        <feFuncB type="table" tableValues="0.57 1 0.96 0.5" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-b"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.92 0.29 0 0.92" />
        <feFuncG type="table" tableValues="0.12 0.04 0 0.12" />
        <feFuncB type="table" tableValues="0.2 1 0 0.2" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-c"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0 0.05 1" />
        <feFuncG type="table" tableValues="0 0 0.05 1" />
        <feFuncB type="table" tableValues="0.1 0 1 1" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-d"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.98 0 1" />
        <feFuncG type="table" tableValues="1 0 0" />
        <feFuncB type="table" tableValues="0.91 0.63 0" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-e"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0 0 0.02 0.82" />
        <feFuncG type="table" tableValues="0.16 0.34 0 0.85 0.97" />
        <feFuncB type="table" tableValues="0.43 0.47 0.17 0.91 1" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-f"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0 0 0.02" />
        <feFuncG type="table" tableValues="0.16 0.34 0 0.85" />
        <feFuncB type="table" tableValues="0.43 0.47 0.17 0.91" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-g"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.63 0.4 0 0.02" />
        <feFuncG type="table" tableValues="1 0.86 0 0.85" />
        <feFuncB type="table" tableValues="0.89 0.6 0.17 0.91" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-h"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0 0 0 1" />
        <feFuncG type="table" tableValues="0 0.38 0 0.38 0" />
        <feFuncB type="table" tableValues="1 1 0 1 1" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-i"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0.98 0.45 0.38 0.22" />
        <feFuncG type="table" tableValues="0.44 0.96 1 0.53 0.24" />
        <feFuncB type="table" tableValues="0.15 0.4 1 0.97 0.4" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-j"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0 0.02" />
        <feFuncG type="table" tableValues="0 0 0.72" />
        <feFuncB type="table" tableValues="0.5 0.63 0.98" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-k"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.98 0.87 0.53 0.2 0.16" />
        <feFuncG type="table" tableValues="0.53 0 0 0.08 0.07" />
        <feFuncB type="table" tableValues="1 0.31 0.16 0.31 0.18" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-l"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.98 0.87 0.53 0.2 0.16 0.87" />
        <feFuncG type="table" tableValues="0.53 0 0 0.08 0.07 0" />
        <feFuncB type="table" tableValues="1 0.31 0.16 0.31 0.18 0.31" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-m"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.98 0.87 0.53 0.2 0.16 0.87 1" />
        <feFuncG type="table" tableValues="0.53 0 0 0.08 0.07 0 0.34" />
        <feFuncB type="table" tableValues="1 0.31 0.16 0.31 0.18 0.31 0.49" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-n"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0.05 0 1" />
        <feFuncG type="table" tableValues="0 0.05 0 1" />
        <feFuncB type="table" tableValues="0.1 1 0 1" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-o"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.69 0.89 0.04 0.04 0.72" />
        <feFuncG type="table" tableValues="0.67 0.87 0.27 0.13 0.76" />
        <feFuncB type="table" tableValues="0.69 0.87 0.55 0.28 0.87" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-p"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.69 0.89 0.04 0.04 1" />
        <feFuncG type="table" tableValues="0.67 0.87 0.27 0.13 0" />
        <feFuncB type="table" tableValues="0.69 0.87 0.55 0.28 1" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-q"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.69 0.89 0.04 0.87 0.87" />
        <feFuncG type="table" tableValues="0.67 0.87 0.13 0 0" />
        <feFuncB type="table" tableValues="0.69 0.87 0.28 0.31 0.31" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-r"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.89 0.52 0.24 0.18 0" />
        <feFuncG type="table" tableValues="0.87 0.92 0.54 0.25 0" />
        <feFuncB type="table" tableValues="0.87 0.85 0.55 0.3 0" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>
    <filter
      id="cyberpunk-s"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.89 0.28 0.01 0.01" />
        <feFuncG type="table" tableValues="0.02 0.04 0.66 0.66" />
        <feFuncB type="table" tableValues="0.57 1 0.96 0.96" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-t"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.01 0.28 0.01 0" />
        <feFuncG type="table" tableValues="0 0.04 0.66 1" />
        <feFuncB type="table" tableValues="0.02 1 0.96 0.5" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-u"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 0.28 0.01" />
        <feFuncG type="table" tableValues="1 0.04 0.66" />
        <feFuncB type="table" tableValues="0.5 1 0.96" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-v"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 0.28 0.89" />
        <feFuncG type="table" tableValues="1 0.04 0.02" />
        <feFuncB type="table" tableValues="0.5 1 0.57" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-x"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values="0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0"
        in="SourceGraphic"
        result="colormatrix"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.01 0.28 0.01" />
        <feFuncG type="table" tableValues="0.66 0.04 0" />
        <feFuncB type="table" tableValues="0.96 1 0.02" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
      <feBlend
        mode="normal"
        in="componentTransfer"
        in2="SourceGraphic"
        result="blend"
      />
    </filter>

    <filter
      id="cyberpunk-y"
      x="-10%"
      y="-10%"
      width="120%"
      height="120%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        result="grayscale"
        values="1 0 0 0 0
                          1 0 0 0 0
                          1 0 0 0 0
                          0 0 0 1 0"
      />
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.01 0.28 0.01" />
        <feFuncG type="table" tableValues="0 0.04 0.66" />
        <feFuncB type="table" tableValues="0.02 1 0.96" />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
    </filter>
  </svg>
</template>
<script>
export default {
  name: "DuotoneFilters",
};
</script>
<style lang="scss">
/*Duotones*/

.svg-filters {
  width: 0;
  height: 0;
}

.duotone-blue-red {
  filter: url("#blue-red");
}

.duotone-black-red {
  filter: url("#black-red");
}

.duotone-spotify-blue {
  filter: url("#spotify-blue");
}

.duotone-pink-blue {
  filter: url("#pink-blue");
}

.duotone-black-white {
  filter: url("#black-white");
}

.duotone-purple-pink {
  filter: url("#purple-pink");
}

.duotone-bluish-canary {
  filter: url("#bluish-canary");
}

.duotone-red-sunset {
  filter: url("#red-sunset");
}

.duotone-pink-yellow {
  filter: url("#pink-yellow");
}

.duotone-cyberpunk-a {
  filter: url("#cyberpunk-a");
}
.duotone-cyberpunk-b {
  filter: url("#cyberpunk-b");
}
.duotone-cyberpunk-c {
  filter: url("#cyberpunk-c");
}
.duotone-cyberpunk-d {
  filter: url("#cyberpunk-d");
}
.duotone-cyberpunk-e {
  filter: url("#cyberpunk-e");
}
.duotone-cyberpunk-f {
  filter: url("#cyberpunk-f");
}
.duotone-cyberpunk-g {
  filter: url("#cyberpunk-g");
}
.duotone-cyberpunk-h {
  filter: url("#cyberpunk-h");
}
.duotone-cyberpunk-i {
  filter: url("#cyberpunk-i");
}
.duotone-cyberpunk-j {
  filter: url("#cyberpunk-j");
}
.duotone-cyberpunk-k {
  filter: url("#cyberpunk-k");
}
.duotone-cyberpunk-l {
  filter: url("#cyberpunk-l");
}
.duotone-cyberpunk-m {
  filter: url("#cyberpunk-m");
}
.duotone-cyberpunk-n {
  filter: url("#cyberpunk-n");
}
.duotone-cyberpunk-o {
  filter: url("#cyberpunk-o");
}
.duotone-cyberpunk-p {
  filter: url("#cyberpunk-p");
}
.duotone-cyberpunk-q {
  filter: url("#cyberpunk-q");
}
.duotone-cyberpunk-r {
  filter: url("#cyberpunk-r");
}
.duotone-cyberpunk-s {
  filter: url("#cyberpunk-s");
}
.duotone-cyberpunk-t {
  filter: url("#cyberpunk-t");
}
.duotone-cyberpunk-u {
  filter: url("#cyberpunk-u");
}
.duotone-cyberpunk-v {
  filter: url("#cyberpunk-v");
}
.duotone-cyberpunk-x {
  filter: url("#cyberpunk-x");
}
.duotone-cyberpunk-y {
  filter: url("#cyberpunk-y");
}
</style>
