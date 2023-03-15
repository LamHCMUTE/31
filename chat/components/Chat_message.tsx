import { Avatar, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';

export interface IMessageProps {
    message: string;
    isMe: boolean;
    date: Date | undefined;
    avatarUrl: string;
}
const itemData = [
    {
        img: 'https://i.pinimg.com/originals/96/31/60/9631601255cccefccecf71b04af459fc.jpg',
        title: 'Breakfast',
    },
    {
        img: '/static/image/background.jpg',
        title: 'Breakfast',
    },
    {
        img: '/static/image/background.jpg',
        title: 'Breakfast',
    },
];
export default function Message(props: IMessageProps) {
    const { message, isMe, date, avatarUrl } = props;
    return (
        <>
            <Stack direction={isMe ? 'row-reverse' : 'row'} columnGap={1}>
                <Avatar alt="Avatar" src={avatarUrl} />
                <Stack gap={1}>
                    <Stack alignItems={isMe ? 'flex-end' : 'normal'}>
                        <Typography sx={{ color: 'white' }}>Ngô Tấn Trọng</Typography>
                        <Typography sx={{ color: 'white' }}>{message}</Typography>
                    </Stack>
                    <ImageList
                        cols={3}
                        rowHeight={164}
                        sx={{
                            direction: isMe ? 'rtl' : 'initial',
                            gridAutoFlow: isMe ? 'dense' : 'initial',
                        }}
                    >
                        {itemData.map((item, index) => (
                            <ImageListItem key={index}>
                                {/* <Image
                                    src={
                                        item.img +
                                        "?w=164&h=164&fit=crop&auto=format"
                                    }
                                    width={164}
                                    height={164}
                                    alt={item.title}
                                    loading="lazy"
                                /> */}
                                <Stack
                                    component={'img'}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    sx={{
                                        width: 164,
                                        height: 164,
                                        objectFit: 'cover',
                                    }}
                                ></Stack>
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography sx={{ color: 'white' }}>
{date?.toLocaleTimeString()}
                            12:00
                        </Typography>
                        <Typography sx={{ color: 'white' }}>Seen</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}