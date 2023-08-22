<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cart_det', function (Blueprint $table) {
            $table->id();
            $table->float('total');
            $table->integer('qt');

            $table->unsignedBigInteger('shoe_id');
            $table->foreign('shoe_id')
                ->references('id')
                ->on('shoes')
                ->onDelete('cascade');

                $table->unsignedBigInteger('cart_id');
                $table->foreign('cart_id')
                    ->references('id')
                    ->on('carts')
                    ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_det');
    }
};
