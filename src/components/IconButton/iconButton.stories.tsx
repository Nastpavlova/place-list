import type { Meta, StoryObj } from "@storybook/react";
import IconButton from './IconButton';

import fillIcon from '../../assets/icons/bookmark_fill.svg'
import outlineIcon from '../../assets/icons/bookmark_outline.svg';

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Кнопка с иконкой для сохранения места.",
      },
    },
  },
  argTypes: {
    fillIcon: {
      description: "Закрашенная иконка",
      control: false,
    },
    outlineIcon: {
      description: "Незакрашенная иконка",
      control: false,
    },
    onClick: {
      action: "clicked",
      description: "Функция, которая вызывается при клике на иконку",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Базовое состояние
export const Default: Story = {
  args: {
    fillIcon: fillIcon,      // передаем импортированную иконку
    outlineIcon: outlineIcon, // передаем импортированную иконку
    alt: "Добавить в закладки",
  },
};


// базовое состояние компонента (прозрачное сердечко)
export const DefaultIconButton: Story = {
  name: "Default IconButton",
  args: {
    fillIcon: fillIcon,
    outlineIcon: outlineIcon,
  },
  parameters: {
    docs: {
      description: {
        story: "Кнопка лайка в неактивном состоянии",
      },
    },
  },
};

// компонент в активном состоянии (зеленое сердечко)
export const ActiveIconButton: Story = {
  name: "Active IconButton",
  args: {
    fillIcon: fillIcon,
    outlineIcon: outlineIcon,
  },
  parameters: {
    docs: {
      description: {
        story: "Кнопка лайка в активном состоянии",
      },
    },
  },
};