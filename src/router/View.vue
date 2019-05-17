<!-- READ ONLY -->

<template>
<div class="container">
  <div class="editor">
    <div class="checkbox">
      <input type="checkbox" id="editable" v-model="editable" />
      <label for="editable">editable</label>
    </div>
    <editor-content class="editor__content" :editor="editor" />
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
        editable: false,
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
          <h2>
            Read-Only
          </h2>
          <p>
            This text is <strong>read-only</strong>. You are not able to edit something. <a href="https://scrumpy.io/">Links to fancy websites</a> are still working.
          </p>
        `,
      }),
      editable: false,
    }
  },
  watch: {
    editable() {
      this.editor.setOptions({
        editable: this.editable,
      })
    },
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
