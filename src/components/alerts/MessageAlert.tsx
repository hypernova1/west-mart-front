import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

interface MessageAlertProps {
  duration?: number;
}

export default function MessageAlert() {
  const dipatch = useDispatch<AppDispatch>();

}