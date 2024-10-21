import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 9px;
  background-color: #e0e0e0;
  margin-top: 20px;
`;

const ProgressBar = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${COLORS.primary};
  width: ${({ width }) => width}%;
  transition: width 0.3s ease;
`;

const Milestone = styled.div<{ left: number; active: boolean }>`
  position: absolute;
  top: -11px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? COLORS.primary : 'transparent')};
  left: ${({ left }) => left}%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: ${({ active }) => (active ? COLORS.primary : COLORS.lightGray)};
  }
`;

const MilestoneProgressBar: React.FC<{ milestones: number[]; currentMilestone: number; onMilestoneClick: (milestone: number) => void }> = ({
  milestones,
  currentMilestone,
  onMilestoneClick,
}) => {
  const getLeftPosition = (milestone: number) => {
    const maxMilestone = milestones[milestones.length - 1];
    return ((milestone - milestones[0]) / (maxMilestone - milestones[0])) * 100;
  };

  return (
    <ProgressContainer>
      <ProgressBar width={getLeftPosition(currentMilestone)} />
      {milestones.map((milestone) => (
        <Milestone
          key={milestone}
          left={getLeftPosition(milestone)}
          active={milestone <= currentMilestone}
          onClick={() => onMilestoneClick(milestone)}
        >
          {milestone}
        </Milestone>
      ))}
    </ProgressContainer>
  );
};

export default MilestoneProgressBar;