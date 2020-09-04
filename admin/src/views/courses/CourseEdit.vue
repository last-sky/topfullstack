<template>
  <div>
    <h3>{{isNew ? '创建':"编辑"}}课程</h3>
  <ele-form
  :form-data="data"
  :form-desc="fields"
  :request-fn="submit"
  >

  </ele-form>
  </div>
</template>

<script lang="ts">
import {Vue, Component,Prop} from "vue-property-decorator"

@Component({})
export default class CourseEdit extends Vue {
  @Prop(String) id!:string
  data = {}

  fields = {
    name: {label: "课程名称",type:"input"},
    cover: {label: "课程封面图",type:"input"},
  }
  get isNew(){
    return !this.id
  }


  async fetch() {
    const res = await this.$http.get(`courses/${this.id}`,)
    console.log(res.data)
    this.data = res.data
  }
  async submit(data){

    if (!this.isNew) {
      await this.$http.put(`/courses/${this.id}`, data);
    } else {
      await this.$http.post("courses",data)

    }
    this.$confirm(`保存成功是否跳转到列表页`, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }).then(async () => {
      this.$router.push("/courses/list");
    });
  }

  created() {
    !this.isNew && this.fetch()

  }
}
</script>

<style scoped>

</style>