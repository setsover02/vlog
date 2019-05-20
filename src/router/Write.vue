<template>
<div class="container">
  <div class="row relative">
    <editor-menu-bubble class="menububble"
                        :editor="heading"
                        v-slot="{ commands, isActive, menu }">
      <div :class="{ 'is-active': menu.isActive }"
           :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`">
        <div class="button-group">
          <button class="menububble__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
            <i class="material-icons-round">title</i>
          </button>
        </div>
      </div>
    </editor-menu-bubble>
    <editor-content class="col-12 editor heading2 mt4 mb2"
                    :editor="heading"
                    data-ripple />
  <div class="row relative">
  </div>
    <editor-menu-bubble class="menububble"
                        :editor="editor"
                        v-slot="{ commands, isActive, menu }">
      <div :class="{ 'is-active': menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`">
        <div class="button-group">
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.bold() }"
                  @click="commands.bold" data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_bold</i>
          </button>
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.italic() }"
                  @click="commands.italic" data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_italic</i>
          </button>
          <button class="menububble__button"
                  @click="commands.link">
            <i class="material-icons-round">link</i>
          </button>
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote" data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_quote</i>
          </button>
        </div>
        <div class="button-group">
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.strike() }"
                  @click="commands.strike"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_strikethrough</i>
          </button>
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.underline() }"
                  @click="commands.underline"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_underlined</i>
          </button>
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.code() }"
                  @click="commands.code"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">code</i>
          </button>
        </div>
        <div class="button-group">
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                  @click="commands.heading({ level: 3 })"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">title</i>
          </button>
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.heading({ level: 4 }) }"
                  @click="commands.heading({ level: 4 })"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">text_fields</i>
          </button>
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.bullet_list() }"
                  @click="commands.bullet_list"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_list_bulleted</i>
          </button>
          <button class="menububble__button"
                  :class="{ 'is-active': isActive.ordered_list() }"
                  @click="commands.ordered_list"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_list_numbered</i>
          </button>
        </div>
      </div>
    </editor-menu-bubble>
    <editor-content class="col-12 editor" :editor="editor" data-ripple/>
  </div>
</div>

</template>
<script>
import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBubble,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h3>부제목</h3>
          <p>연약한 나비는 창공을 향해 날아오른다.</p>
        `,
      }),
      heading: new Editor({
        extensions: [
          new Heading({ levels: [2] }),
        ],
        content: `
          <h2>제목을 입력해주세요.</h2>
        `,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
