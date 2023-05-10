<?php

$data = [
  'title' => $page->title()->value(),
  'metaTitle' => $page->customTitle()->or($page->title() . ' – ' . $site->title())->value(),
  'mackPrimaryPhoto' => $page->mackPrimaryPhoto()->toFile()->url(),
  'mackPhotos' => $page->mackPhotos()->toFiles()->map(fn($photo) => [
    'photo' => $photo->url(),
  ])->values(),
  'bio' => $page->bio()->kt()->value(),
];

echo \Kirby\Data\Json::encode($data);
