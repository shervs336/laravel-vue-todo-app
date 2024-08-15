<?php
namespace App\Enums;

enum ToDoStatus: string
{
  case PENDING = 'pending';
  case IN_PROGRESS = 'in progress';
  case COMPLETED = 'completed';


  public static function toArray(): array
  {
      return array_column(ToDoStatus::cases(), 'value');
  }    
}