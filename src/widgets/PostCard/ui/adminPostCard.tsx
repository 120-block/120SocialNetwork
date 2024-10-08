import React from 'react';
import axios from "axios";
import { AvatarImage, Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { AvatarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';

type postCardProps = {
    post_id: number;
    user: string;
    usersAvatar?: string;
    postsDescription: string;
    postsImage: string;
    control: boolean;
    check: boolean;
    refreshPosts: () => void;
};

const AdminPostCard: React.FC<postCardProps> = ({
                                               post_id,
                                               user,
                                               usersAvatar,
                                               postsDescription,
                                               postsImage,
                                               refreshPosts
                                           }) => {

    const handleReject = async () => {
        try {
            await axios.post('https://120-server.vercel.app/api/post/update', {
                post_id: post_id,
                check: true,
                control_id: false
            });
            console.log('Post updated successfully');
            refreshPosts();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handleAccept = async () => {
        try {
            await axios.post('https://120-server.vercel.app/api/post/update', {
                post_id: post_id,
                check: true,
                control_id: true
            });
            console.log('Post updated successfully');
            refreshPosts();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div className="max-w-[389px] w-full rounded-[14px] bg-white flex flex-col gap-y-0.5">
            <div className="inline-flex items-center gap-x-1.5 py-1 pl-1">
                <Avatar className="size-[38px]">
                    {usersAvatar ? (
                        <AvatarImage width={128} height={128} alt="Avatar" src={usersAvatar} />
                    ) : (
                        <AvatarFallback>
                            <AvatarIcon className="text-black/40" height={38} width={38} />
                        </AvatarFallback>
                    )}
                </Avatar>
                <div className="flex flex-col">
                    <p className="text-secondarybody text-black">{user}</p>
                    <p className="text-[12px] tracking-[-0.02em] text-app_gray_light-300">
                        {postsDescription}
                    </p>
                </div>
                <div className="ml-auto pr-[12px] inline-flex gap-x-2.5 items-center">
                    <button className="bg-[#21c004]/15 border border-[#21c004] text-[#21c004] rounded-[8px] px-2.5 py-1 text-xs leading-[15px] font-medium inline-flex items-center gap-x-1.5 active:bg-[#21c004]/25" onClick={handleAccept} >
                        Accept <HandThumbUpIcon className='size-3' />
                    </button>
                    <button className="bg-[#F55858]/15 border border-[#F55858] text-[#F55858] rounded-[8px] px-2.5 py-1 text-xs leading-[15px] font-medium inline-flex items-center gap-x-1.5 active:bg-[#F55858]/25" onClick={handleReject} >
                        Reject <HandThumbDownIcon className='size-3' />
                    </button>
                </div>
            </div>
            <Image
                src={postsImage}
                className="w-full aspect-square rounded-b-[14px]"
                alt={'post'}
                width={512}
                height={512}
            />
        </div>
    );
};

export default AdminPostCard;
