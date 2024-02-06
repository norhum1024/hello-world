import styles from "./hello-world.module.scss"
export const HelloWorld = ()=>{
    return(
        <p className={styles["hello-world"]}>Hello World!</p>
    )
};