import Navbar from "../../components/Navbar";
import styles from "./styles/styles.module.css";

export default function HomeLayout() {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className={styles.image}>
            <div className={styles.filter}></div>
          </div>
          <div
            className="absolute text-5xl font-serif font-bold flex flex-col items-center text-white"
            style={{ top: "36rem" }}
          >
            <span className="text-gray-200 py-1">
              Track albums you've listened to
            </span>
            <span className="text-gray-200 py-1">
              Save those you want to hear
            </span>
            <span className="text-gray-200 py-1">
              Share your favorites with friends
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
