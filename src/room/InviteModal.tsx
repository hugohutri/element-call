/*
Copyright 2022 Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { FC } from "react";

import { Modal, ModalContent, ModalProps } from "../Modal";
import { CopyButton } from "../button";
import { getRoomUrl } from "../matrix-utils";
import styles from "./InviteModal.module.css";

interface Props extends Omit<ModalProps, "title" | "children"> {
  roomIdOrAlias: string;
}

export const InviteModal: FC<Props> = ({ roomIdOrAlias, ...rest }) => (
  <Modal
    title="Invite People"
    isDismissable
    className={styles.inviteModal}
    {...rest}
  >
    <ModalContent>
      <p>Copy and share this meeting link</p>
      <CopyButton
        className={styles.copyButton}
        value={getRoomUrl(roomIdOrAlias)}
      />
    </ModalContent>
  </Modal>
);
