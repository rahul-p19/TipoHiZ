'use client';
import React from 'react';
import TextArea from '@/components/TextArea';
import UserSelectPallete from '@/components/UserSelectPallete';
import ResetTestButton from '@/components/reset-test-button';
import { MdLanguage } from 'react-icons/md';
import useTimer from '@/helpers/utils/useTimer';
import { userConfigStore } from '@/store';
import useKeydownGetter from '@/helpers/utils/useKeydownGetter';
import { IoIosColorPalette } from 'react-icons/io';
import ThemeChoose from '@/components/expo/theme-choose';

export default function HomePage() {
   const { time } = userConfigStore((state) => state);
   const { timer, run, reset } = useTimer(1, time);
   useKeydownGetter({ run, reset });
   return (
      <div>
         <UserSelectPallete reset={reset} />
         <div className="flex items-center justify-between mt-16 sm:px-10">
            <div className="text-xl font-medium font-poppins text-accent flex-wrap">
               {/* <button
                  className={`flex font-bold items-center justify-center rounded py-2 mt-5 text-input w-48 ${
                     isRunning || isExited ? 'bg-background' : 'bg-foreground'
                  }`}
                  onClick={run}
                  disabled={isRunning || isExited}
               >
                  start
               </button> */}
               <div className='mb-2'>{timer}</div>
            </div>
            <div className="flex items-center justify-center mb-4 tracking-widest lowercase text-input gap-x-1">
               <MdLanguage className='mt-2'/>
               <p className="cursor-pointer mt-2">english</p>
            </div>
            <div>
               <div className="flex items-center gap-1 cursor-pointer text-input mb-3">
                  <IoIosColorPalette />
                  <ThemeChoose />
               </div>
            </div>
         </div>
         <TextArea />
         <ResetTestButton reset={reset} />
      </div>
   );
}
