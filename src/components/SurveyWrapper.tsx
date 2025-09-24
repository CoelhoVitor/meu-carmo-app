'use client';

import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import('./SurveyComponent'), {
  ssr: false,
});

export default function SurveyWrapper() {
  return <SurveyComponent />;
}
