
// components/modals/AddUserModal.tsx
'use client';
import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { AIApplicationSummary } from '@/types/ai-apps';
import { FaExpand, FaLink } from 'react-icons/fa6';
import AITypes from '../AITypes';
import { useTheme } from '@/context/ThemeContext';

interface AddUserModalProps {
    appSummary?: AIApplicationSummary | null
}

export const AiAppModal: React.FC<AddUserModalProps> = ({
    appSummary,
}) => {
    // #region STATE
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    // #endregion

    // #region HANDLERS
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
    };
    // #endregion

    return (
        <>
            <Button variant="primary" onClick={handleOpen} size='sm'>
                <FaExpand />
            </Button>

            {isOpen && (
                <Modal
                    title={appSummary?.name}
                    onClose={handleClose}
                    // onSubmit={handleSubmit}
                    submitText="Submit"
                    cancelText="Cancel"
                >
                    <>
                        <div className='bg-red-400' style={{
                            minHeight: '16rem',
                            background: `url(${appSummary?.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}>
                            <div className='flex flex-row item-center p-4 opacity-70'>
                                <div className='mr-4 text-white rounded-full p-2 font-bold' style={{ background: theme.PRIMARY }}>
                                    {appSummary?.rating}
                                </div>
                            </div>
                        </div>
                        <br />

                        <AITypes data={appSummary?.types ?? []} />

                        <hr className='my-4 bg-opacity-40' />

                        <div>{appSummary?.description}</div>
                        <br />

                        <div>
                            <strong>Pricing:</strong>
                            <div>{appSummary?.pricing}</div>
                        </div>
                        <br />

                        <div>
                            <strong>Pros</strong>
                            <ul>{appSummary?.pros.map((item: string) => (
                                <li key={item}>- {item}</li>
                            ))}
                            </ul>
                        </div>
                        <div>
                            <strong>Cons</strong>
                            <ul>{appSummary?.cons.map((item: string) => (
                                <li key={item}>- {item}</li>
                            ))}
                            </ul>
                        </div>
                        <br />

                        <div className={`ml-2 w-fit text-white bg-[${theme.PRIMARY}] p-2 px-3 rounded-full flex flex-row items-center`} style={{ backgroundColor: theme.PRIMARY }}>
                            <a href={appSummary?.link} target='_blank' className='text-md font-bold'>Open</a>
                            <FaLink className='text-white text-lg ml-2' />
                        </div>
                    </>
                </Modal>
            )}
        </>
    );
};
