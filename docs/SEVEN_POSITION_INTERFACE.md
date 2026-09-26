# Seven-Position Interface Language

This repository uses the shared seven-position interface model as a software protocol.

## Word format

```
H1 H2 H3 H4 H5 H6 | G
```

H1-H6 form the vector/color portion. The six-position analogy comes from RRGGBB, but these fields are protocol coordinates rather than CSS colors.

G is the seventh position and gate:

- 0 = BLACK / off
- 1 = WHITE / on

BLACK/WHITE therefore does not add an eighth position.

## Logical stack

```
RED / neon outer environment
  YELLOW / helium read layer
    BLUE / nitrogen write/search center
```

This is a functional software geometry. It does not claim that individual gas atoms literally nest this way.

## Packet

```
[operation][H1..H6][G][source][destination/reach][payload]
```

Vector states may select/search relationships between logical nodes.

## Physical boundary

A future hardware implementation may investigate nitrogen, helium, and neon electronic-state responses. The physical mapping of H1-H6 is not yet established. Electronic excitation does not by itself change proton number, and the protocol does not assume nuclear transmutation.

The software can implement and test the language before any physical gas interface exists.
