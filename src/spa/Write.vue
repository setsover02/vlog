<template>
<div class="container">
  <div class="row editor">
    <editor-content class="col-12 editor__content heading2 mt4 mb2" :editor="heading" data-ripple="data-ripple" />
  </div>
  <div class="row editor">
    <editor-menu-bubble class="menububble" :editor="editor" @hide="hideLinkMenu" v-slot="{ commands, isActive, getMarkAttrs, menu }">
      <div :class="{ 'is-active': menu.isActive }" :style="`left: ${menu.left}px; top: ${menu.top}px;`">
        <div class="button-group">
          <button class="menububble__button"
                  v-tooltip.top="'굵게'"
                  :class="{ 'is-active': isActive.bold() }"
                  @click="commands.bold"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_bold</i>
          </button>
          <button class="menububble__button"
                  v-tooltip.top="'기울임'"
                  :class="{ 'is-active': isActive.italic() }"
                  @click="commands.italic"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_italic</i>
          </button>
          <form class="menububble__form" v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
            <input class="menububble__input"
                   type="text"
                   v-model="linkUrl"
                   placeholder="https://"
                   ref="linkInput"
                   @keydown.esc="hideLinkMenu" />
            <button class="menububble__button" v-tooltip.top="'링크 제거'" @click="setLinkUrl(commands.link, null)" type="button">
              <i class="material-icons-round">link_off</i>
            </button>
          </form>
          <template>
            <button class="menububble__button" v-tooltip.top="'링크 추가'" @click="showLinkMenu(getMarkAttrs('link'))" :class="{ 'is-active': isActive.link() }">
              <span>{{ isActive.link() ? '' : ''}}</span>
              <i class="material-icons-round">link</i>
            </button>
          </template>
          <button class="menububble__button"
                  v-tooltip.top="'인용'"
                  :class="{ 'is-active': isActive.blockquote() }"
                  @click="commands.blockquote"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_quote</i>
          </button>
        </div>
        <div class="button-group">
          <button class="menububble__button"
                  v-tooltip.top="'취소선'"
                  :class="{ 'is-active': isActive.strike() }"
                  @click="commands.strike"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_strikethrough</i>
          </button>
          <button class="menububble__button"
                  v-tooltip.top="'밑줄'"
                  :class="{ 'is-active': isActive.underline() }"
                  @click="commands.underline"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_underlined</i>
          </button>
          <button class="menububble__button"
                  v-tooltip.top="'코드삽입'"
                  :class="{ 'is-active': isActive.code() }"
                  @click="commands.code"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">code</i>
          </button>
        </div>
        <div class="button-group">
          <button class="menububble__button"
                  v-tooltip.top="'제목1'"
                  :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                  @click="commands.heading({ level: 3 })"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">title</i>
          </button>
          <button class="menububble__button"
                  v-tooltip.top="'제목2'"
                  :class="{ 'is-active': isActive.heading({ level: 4 }) }"
                  @click="commands.heading({ level: 4 })"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">text_fields</i>
          </button>
          <button class="menububble__button"
                  v-tooltip.top="'목록'"
                  :class="{ 'is-active': isActive.bullet_list() }"
                  @click="commands.bullet_list"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_list_bulleted</i>
          </button>
          <button class="menububble__button"
                  v-tooltip.top="'순차목록'"
                  :class="{ 'is-active': isActive.ordered_list() }"
                  @click="commands.ordered_list"
                  data-ripple="rgba(255,255,255,.1)">
            <i class="material-icons-round">format_list_numbered</i>
          </button>
        </div>
      </div>
    </editor-menu-bubble>
    <editor-content class="col-12 editor__content" :editor="editor" data-ripple />
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
  History
} from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBubble,
    EditorContent
  },
  data() {
    return {
      heading: new Editor({
        extensions: [
          new Heading({
            levels: [2]
          })
        ],
        content: `
          <p>제목을 입력해주세요.</p>
        `,
        autoFocus: true
      }),
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({
            levels: [1, 2, 3]
          }),
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
          new History()
        ],
        content: `
          <h3>부제목</h3>
          <p>연약한 나비는 창공을 향해 날아오른다.</p>
        `
      }),
      linkUrl: null,
      linkMenuIsActive: false
    }
  },
  methods: {
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href
      this.linkMenuIsActive = true
      this.$nextTick(() => {
        this.$refs.linkInput.focus()
      })
    },
    hideLinkMenu() {
      this.linkUrl = null
      this.linkMenuIsActive = false
    },
    setLinkUrl(command, url) {
      command({
        href: url
      })
      this.hideLinkMenu()
      this.editor.focus()
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>
