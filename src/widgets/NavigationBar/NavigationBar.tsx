import {cn} from "@/shared/utils";
import {CogIcon, CameraIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslations} from "next-intl";
import {GetServerSideProps} from "next";
import {fetchPosts} from "@/shared/api/posts/getAll";

export const NavigationBar = () => {
    const router = useRouter();
    const t = useTranslations();

    return router.pathname != "/" && router.pathname != "/feed/addPost" ? (
        <nav
            className="w-full z-[99] bg-white border-t dark:bg-app_gray_dark-300 dark:border-app_gray_dark-100 border-black/15 pb-8 pt-2.5 px-[54px] justify-between inline-flex items-center fixed left-0 bottom-0  mx-auto">
            <Link
                href={"/profile"}
                className={cn(
                    "flex flex-col items-center gap-y-1",
                    router.pathname.startsWith("/profile")
                        ? "text-app_blue"
                        : "text-app_gray_light-300",
                )}
            >
                {/* позже сделать чтобы иконка менялась в случае если у юзера есть аватарка */}
                <UserCircleIcon className="size-8"/>
                <p className="text-[10px] font-medium tracking-[-0.04em]">{t('Profile')}</p>
            </Link>
            <Link
                href={"/feed"}
                className={cn(
                    "flex flex-col items-center gap-y-1",
                    router.pathname === "/feed" ? "text-app_blue" : "text-app_gray_light-300",
                )}
            >
                <CameraIcon className="size-8"/>
                <p className="text-[10px] font-medium tracking-[-0.04em]">{t('Feed')}</p>
            </Link>
            <Link
                href={"/settings"}
                className={cn(
                    "flex flex-col items-center gap-y-1",
                    router.pathname.startsWith("/settings")
                        ? "text-app_blue"
                        : "text-app_gray_light-300",
                )}
            >
                <CogIcon className="size-8"/>
                <p className="text-[10px] font-medium tracking-[-0.04em]">{t('Settings')}</p>
            </Link>
        </nav>
    ) : null;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const data = await fetchPosts();
    const messages = (await import(`../../../languages/${locale}.json`)).default;
    return {
        props: {
            ...data,
            messages
        }
    };
};
