import * as Avatar from '@radix-ui/react-avatar'
//import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './avatar.module.scss'
import {FC} from 'react'
import {UserData} from 'src/types'

type Props = {
    user: UserData
}

export const UserAvatar: FC<Props> = () => {

    return (
        <Avatar.Root className={s.AvatarRoot}>
            <Avatar.Image
                className={s.AvatarImage}
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
            />
            <Avatar.Fallback className={s.AvatarFallback} delayMs={600}>
                CT
            </Avatar.Fallback>
        </Avatar.Root>

    )
}