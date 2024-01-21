import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div> {/* 클래스네임 추가 */}
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
