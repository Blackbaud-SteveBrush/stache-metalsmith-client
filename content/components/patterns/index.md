---
title: Patterns
layout: panels
description: Read more about Stache's many navigation patterns
panelsData:
    items:
        - title: Hello, World
          content: <h2>This is the description, no?</h2>
          uri: http://google.com
          classname: heyo
---

# Patterns

## Panels Pattern

### FM data:
{{{ json panelsData }}}

### Navigation data:
{{{ json navigation.patterns.sidebar }}}

{{> panels panelsData }}
