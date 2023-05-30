import React from 'react'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'
import Comma from '@/utils/Comma'
import { useAppDispatch } from '@/store'
import { RemoveFromCartAction } from '@/store/actions/ProductActions'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'

interface Props {
  product?: any,
  className?: String,
  cart?: Boolean
}

const CartItem = ({ product, className, cart, ...props }: Props) => {

  const dispatch = useAppDispatch()
  const removeFromCart = (item: any) => {
    console.log("Removing", item.id);
    dispatch(RemoveFromCartAction(item))
  }

  return (
    <div className='w-full md:w-[500px] text-start'>
      <Card
        direction={'row'}
        overflow='auto'
        variant='outline'
        rounded="none"
      >
        <Image
          objectFit='cover'
          maxW={{ base: '110px', sm: '120' }}
          maxH={{ base: '110px', sm: '120px' }}
          src={product.image}
          alt={product.name}
        />

        <Stack className='w-full'>
          <CardBody
            width="full"
            overflow="hidden"
          >
            <div className="flex w-full justify-between">
              <h4 className='font-bold w-[70%] overflow-clip text-base'>{product.quantity}x {product.name}</h4>
              <Button
                onClick={() => removeFromCart(product)}
                px={-10} className='' colorScheme='red'>X</Button>
            </div>

            <Text className='flex justify-between font-inter mb-0'>
              <p>Size: {product.size}</p>
              <p className='mb-0'>Rs.{product.price}</p>
            </Text>

          </CardBody>
        </Stack>
      </Card>

    </div>
  )
}

export default CartItem