"use client";
import React from "react";
import styled from "styled-components";

interface BadgeNotificationProps {
  children: React.ReactNode;
  badgeNumber: number;
}

function BadgeNotification({ children, badgeNumber }: BadgeNotificationProps) {
  return (
    <Wrapper>
      {children}
      {badgeNumber > 0 && <Badge>{badgeNumber}</Badge>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Badge = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  align-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 0.75rem;
  min-width: 20px;
  line-height: 1;
  height: 20px;
  background-color: #fe0100;
  color: var(--color-white);
  top: 0px;
  right: 0px;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
  padding: 0px 6px;
  border-radius: 10px;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export default BadgeNotification;
