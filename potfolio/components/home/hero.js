import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 김마유입니다!
                    <br className="hidden lg:inline-block" />
                    오늘도 빡코딩
                </h1>
                <p className="mb-8 leading-relaxed">
                    모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는
                    행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지
                    아니한다. 국무위원은 국무총리의 제청으로 대통령이 임명한다.
                    대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.
                    국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한
                    때에는 대통령은 이를 해제하여야 한다. 새로운 회계연도가
                    개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서
                    예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도
                    예산에 준하여 집행할 수 있다. 감사위원은 원장의 제청으로
                    대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여
                    중임할 수 있다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <div className="btn-project">
                            프로젝트 보러가기
                        </div>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
