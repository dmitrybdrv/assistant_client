import loader from 'src/assets/img/loading.gif'
import s from './loader.module.scss'


export const Loader = () => {

    return (
        <div className={s.modalWrapper}>
            <div className={s.modalWindow}>
                <img className={s.circle} src={loader} alt="loader" />
            </div>
            <div className={s.overlay}></div>
        </div>
)

}
