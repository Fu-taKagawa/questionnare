import { useForm, Controller } from "react-hook-form"
import { useState } from "react"
import Container from "@material-ui/core/Container"
import Input from "@material-ui/core/Input"
// 
// const firebaseConfig = {
//   apiKey: "AIzaSyCori5Xzml3-TwIkUid2THykviXfJ9MJXk",
//   authDomain: "questionnnare.firebaseapp.com",
//   projectId: "questionnnare",
//   storageBucket: "questionnnare.appspot.com",
//   messagingSenderId: "1025112133066",
//   appId: "1:1025112133066:web:a1b6318bbfb544427ad333"
// }
// firebase.initializeApp(firebaseConfig)

export default function Home() {
  const { register, handleSubmit, formState: { errors }, control } = useForm()
  const onSubmit = (data) => {
    console.log(data.name)
  }
  const [Learning, setLearning] = useState(false)
  const [Learned, setLearned] = useState(false)

  const change1 = () => {
    setLearning(!Learning)
    console.log('ok')
  }
  const change2 = () => {
    setLearned(!Learned)
  }
  console.log(Learning, Learned)
  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1.　名前を入力してください（匿名可）。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
          </div>
          <div>
            <label htmlFor="birth">Q2.　生年月日を入力してください。（例：19900902）</label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
            {
              errors.birth && errors.birth.type === "required" ?
                <span>このフィールドは解答必須です。</span> : null
            }
            {
              errors.birth && errors.birth.type === "pattern" ?
                <span>整数8桁で入力してください。</span> : null
            }

          </div>
          <div>
            <span> Q3.　現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="true"
              onChange={
                change1
              }
            />
            <label htmlFor="isLearning1">はい</label>

            <input id="isLearning2"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning2">いいえ</label>
            {errors.isLearning && <span>このフィールドは解答必須です。</span>}
          </div>
          <div>
            <span>Q4.　これまでに、プログラミングを学習したことはありますか？？</span>
            <input id="wasLearning1"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="true"
              onChange={
                change2
              }
            />

            <label htmlFor="wasLearning1">はい</label>

            <input id="wasLearning2"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning2">いいえ</label>
            {errors.wasLearning && <span>このフィールドは解答必須です。</span>}
          </div>
          <div>
            {(Learning || Learned) &&
              <div>
                <span>Q5.　今まで学習したことのあるプログラミング言語をすべて教えて下さい。</span>
                <br />
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>
            }
          </div>


          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
    </>
  )
}