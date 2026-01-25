import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AccessibilityBarProps {
  isAccessible: boolean;
  onToggle: () => void;
}

export default function AccessibilityBar({ isAccessible, onToggle }: AccessibilityBarProps) {
  return (
    <div className="bg-gray-900 text-white py-2 px-4">
      <div className="container mx-auto flex justify-end items-center">
        <Button
          onClick={onToggle}
          variant="ghost"
          className="text-white hover:bg-white/10 font-medium"
          size="sm"
        >
          <Icon name="Eye" className="mr-2" size={18} />
          {isAccessible ? 'Обычная версия' : 'Версия для слабовидящих'}
        </Button>
      </div>
    </div>
  );
}
